import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const QuienesSomos = () => {
    return (
      
      <div style={styles.container}>
        <Sidebar /> {/* Sidebar con el botón de 3 rayas */}
        <div style={styles.content}>
          <Header />
          <main>
            <h2 style={styles.heading}>Quienes somos?</h2>
            <h4 style={styles.heading}>Somos una tienda online Uruguaya de origen Coloniense, surge gracias a que nadie le dio trabajo a su creador. Hijos de puta.</h4>
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
      height: '100%',
    },
    heading: {
      textAlign: 'center',
      marginTop: '2rem',
    },
  };
  export default QuienesSomos;