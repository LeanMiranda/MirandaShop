import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Help = () => {
    return (
      
      <div style={styles.container}>
        <Sidebar /> {/* Sidebar con el botón de 3 rayas */}
        <div style={styles.content}>
          <Header />
          <main>
            <h2 style={styles.heading}>Contacta al soporte</h2>
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
  export default Help;