// src/components/Sidebar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Controla si el sidebar está abierto o cerrado
  const categories = ['Ropa', 'Calzado', 'Accesorios', 'Electrónica', 'Hogar'];

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Alterna el estado abierto/cerrado del sidebar
  };

  return (
    <>
      {/* Botón de "3 rayas" para dispositivos móviles */}
      <button style={styles.hamburger} onClick={toggleSidebar}>
        &#9776;
      </button>

      {/* Sidebar que se muestra u oculta según el estado */}
      <aside style={{ ...styles.sidebar, left: isOpen ? '0' : '-250px' }}>
        <nav>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="/" onClick={toggleSidebar}>Inicio</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/login" onClick={toggleSidebar}>Iniciar sesión</Link>
            </li>
            <li style={styles.navItem}>
              <strong>Categorías</strong>
              <ul style={styles.categoryList}>
                {categories.map((category, index) => (
                  <li key={index} style={styles.categoryItem}>
                    <Link to={`/category/${category.toLowerCase()}`} onClick={toggleSidebar}>
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

const styles = {
  hamburger: {
    fontSize: '30px',
    cursor: 'pointer',
    padding: '10px',
    backgroundColor: '#f4f4f4',
    border: 'none',
    position: 'fixed',
    top: '20px', // Ajuste la posición superior para estar más abajo
    left: '10px',
    zIndex: '1000',
  },
  sidebar: {
    width: '250px',
    height: '100vh',
    padding: '1rem',
    backgroundColor: '#f4f4f4',
    borderRight: '1px solid #ddd',
    position: 'fixed',
    top: '100px',
    left: '-250px', // Empieza oculto fuera de la pantalla
    transition: 'left 0.3s ease',
    zIndex: '999',
  },
  navList: {
    listStyleType: 'none',
    padding: '0',
  },
  navItem: {
    marginBottom: '1rem',
  },
  categoryList: {
    listStyleType: 'none',
    paddingLeft: '1rem',
  },
  categoryItem: {
    marginBottom: '0.5rem',
  },
};

export default Sidebar;