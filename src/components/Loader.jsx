// src/components/Loader.jsx
import React from 'react';
import '../styles/loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner" />
      <p>در حال بارگذاری...</p>
    </div>
  );
};

export default Loader;
