// src/components/Header.js

import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div>
        <h1>MirandaShop</h1>
      </div>
      <nav>
      <ul style={styles.navList}>
          <li><a href="/Help">Ayuda</a></li>
        </ul>
        <ul style={styles.navList}>
          <li><a href="/QuienesSomos">Quienes Somos</a></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#333',
    color: '#fff',
  },
  navList: {
    display: 'flex',
    listStyleType: 'none',
  },
  navItem: {
    marginLeft: '1rem',
  },
};

export default Header;