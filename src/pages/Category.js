// src/pages/Category.js

import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { categoryName } = useParams();

  return (
    <div style={styles.container}>
      <h2>Artículos en {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h2>
      {/* Aquí iría la lista de productos filtrados por categoría */}
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
  },
};

export default Category;