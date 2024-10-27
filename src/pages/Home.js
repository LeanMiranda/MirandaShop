// src/pages/Home.js

import React, { useEffect } from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Sidebar from '../components/Sidebar';



const Home = () => {
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users'); // Asegúrate de que este puerto sea correcto
        const data = await response.json();
        console.log('Usuarios:', data); // Muestra los usuarios en la consola
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    }; fetchUsers();
  }, []);
  return (
    
    <div style={styles.container}>
      <Sidebar /> {/* Sidebar con el botón de 3 rayas */}
      <div style={styles.content}>
        <Header />
        <main>
          <h2 style={styles.heading}>Bienvenido a MirandaShop Uruguay</h2>
          <ProductList />
        </main>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
  },
  content: {
    marginLeft: '75px', // Margen para el contenido si el sidebar está visible
    width: '100%',
  },
  heading: {
    textAlign: 'center',
    marginTop: '2rem',
  },
};

export default Home;