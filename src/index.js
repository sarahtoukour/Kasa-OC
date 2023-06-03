// Point d'entrée de l'application React

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// createRoot = méthode qui est utilisée pour initialiser la racine de l'application React
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
