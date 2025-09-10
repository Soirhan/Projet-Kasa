import { Link } from 'react-router-dom'
import React from 'react'
import logo from '../../assets/LOGO.png'
import './header.scss'

// Composant Header avec logo et navigation principale
function Header() {
  return (
    <header className='header_container'>
      {/* Logo cliquable renvoyant à la page d'accueil */}
      <Link to="/">
        <img className='logo' src={logo} alt="logo kasa"/>
      </Link>

      {/* Barre de navigation */}
      <nav className='navbar'>
        <div className="navbar__link">
          <Link className="nav" to="/">Accueil</Link>
        </div>
        <div className="navbar__link">
          <Link className="nav" to="/about">À Propos</Link>
        </div>    
      </nav>
    </header>
  )
}

export default Header
