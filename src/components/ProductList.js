// src/components/ProductList.js

import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  // Simulación de productos
  const products = [
    {
      id: 1,
      name: 'Amplificador Orange Crush 25',
      description: 'Tipo: Transistor. 25watts RMS',
      price: 200,
      imageUrl: 'https://via.placeholder.com/200',
    },
    {
      id: 2,
      name: 'Pantalones Vaqueros',
      description: 'Pantalones vaqueros de alta calidad',
      price: 49.99,
      imageUrl: 'https://via.placeholder.com/200',
    },
    {
      id: 3,
      name: 'Zapatillas Deportivas',
      description: 'Zapatillas cómodas para el deporte',
      price: 89.99,
      imageUrl: 'https://via.placeholder.com/200',
    },
  ];

  return (
    <div style={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
    padding: '2rem',
  },
};

export default ProductList;