// Importation de React (obligatoire pour utiliser JSX)
import React from 'react'
// Importation du Router de react-router-dom pour gérer la navigation entre les pages
import { BrowserRouter as Router } from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import App from './App';

// Récupère l'élément racine du DOM
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Monte l'application avec le Router pour la navigation
root.render(
  <Router>
    <App />
  </Router>,
);
