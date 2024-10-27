const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sql, poolPromise } = require('./db'); // Asegúrate de que sql se importa aquí

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas

// Registrar usuario
app.post('/api/users', async (req, res) => {
  const { userName, apellido, cedula,correo, nacimiento } = req.body;
  try {
    const pool = await poolPromise;
    // Aquí estamos usando result para saber si se realizó la inserción
    const result = await pool.request()
      .input('userName', sql.VarChar, userName)
      .input('apellido', sql.VarChar, apellido)
      .input('cedula', sql.VarChar, cedula)
      .input('correo', sql.VarChar, correo)
      .input('nacimiento', sql.VarChar, nacimiento)
      .query('INSERT INTO users (userName, apellido, cedula,correo, nacimiento) VALUES (@userName, @apellido, @cedula,@correo, @nacimiento)');

    // Puedes enviar un mensaje de éxito, o cualquier otro dato que desees
    res.status(201).json({ message: 'Usuario registrado con éxito.', userId: result.rowsAffected });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar el usuario.' });
  }
});

// Obtener usuarios
app.get('/api/users', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM users');

    // Usa result.recordset para devolver la lista de usuarios
    res.json(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los usuarios.' });
  }
});

// Registrar producto
app.post('/api/products', async (req, res) => {
    const { nombre, precio, categoria } = req.body;
    try {
      const pool = await poolPromise;
      await pool.request()
        .input('nombre', sql.VarChar, nombre)
        .input('precio', sql.Float, precio)
        .input('categoria', sql.VarChar, categoria)
        .query('INSERT INTO products (nombre, precio, categoria) VALUES (@nombre, @precio, @categoria)');
      
      res.status(201).json({ message: 'Producto registrado con éxito.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al registrar el producto.' });
    }
  });
  
  // Obtener productos
  app.get('/api/products', async (req, res) => {
    try {
      const pool = await poolPromise;
      const result = await pool.request().query('SELECT * FROM products');
      res.json(result.recordset);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener los productos.' });
    }
  });
  

// Aquí puedes agregar más rutas para productos y compras

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

