// src/components/ProductCard.js

import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={styles.card}>
      <img src={product.imageUrl} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
      <button style={styles.button}>Añadir al carrito</button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '1rem',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default ProductCard;