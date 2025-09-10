// Importation des composants nécessaires de react-router-dom
import { Routes, Route } from 'react-router-dom'

// Importation des pages et composants utilisés dans l'application
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import About from './pages/About'
import Logement from './pages/Logement'
import './utils/style/globalStyle.scss'

// Composant principal de l'application
function App() {
  return (
    <div className="App">
          {/* Composant affiché en haut de toutes les pages */}
          <Header />

          {/* Définition des différentes routes de l'application */}
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />} />
            {/* Route dynamique : "logementId" est un paramètre d'URL */}
            <Route path="/logement/:logementId" element={<Logement />}/>
            <Route path="/*" element={<Error />} />
          </Routes>

          {/* Composant affiché en bas de toutes les pages */}
          <Footer />
    </div>
  )
}

// Exportation du composant pour qu'il soit utilisé dans index.js
export default App
