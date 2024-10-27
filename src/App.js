import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'; // Crearás este componente en el siguiente paso
import Category from './pages/Category'; // Crearás este componente
import Help from './pages/Help';
import QuienesSomos from './pages/QuienesSomos';  
import './App.css';
import Footer from './components/Footer'; // Asegúrate de importar el Footer

const App = () => {
  return (
    <Router>
      <div style={styles.appContainer}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category/:categoryName" element={<Category />} />´
        <Route path="/Help" element={<Help />} />
        <Route path="/QuienesSomos" element={<QuienesSomos />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
};

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Asegura que el contenedor ocupe al menos toda la altura de la ventana
  },
};

export default App;