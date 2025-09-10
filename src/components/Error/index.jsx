import React from 'react'
import { Link } from "react-router-dom";
import './error.scss'

// Page d'erreur 404 pour les routes non trouvées
export default function Error() {
  return (
    <div className="error">
      <h1 className='error_title'>404</h1>
      <p className='error_text'>Oups ! La page que vous demandez n'existe pas.</p>
      {/* Lien pour retourner à la page d'accueil */}
      <Link className="backhome" to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}
