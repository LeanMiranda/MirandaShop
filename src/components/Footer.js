import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} MirandaShop. Todos los derechos reservados.</p>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: 'auto', // Empuja el footer hacia el fondo
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    borderTop: '1px solid #ddd',
  },
};

export default Footer;