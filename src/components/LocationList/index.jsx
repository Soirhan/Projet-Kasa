import { Link } from "react-router-dom";
import React from 'react';
import { useFetch } from '../../utils/hooks'
import { Loader } from '../../utils/style/Loader'
import '../../utils/style/Loader.scss'
import './LocationList.scss'

// Composant qui liste les logements avec récupération des données via useFetch
export default function LocationList() {
  const { data, isLoading, error } = useFetch(`/logements.json`) // fetch des logements

  // Affiche l'erreur si problème de fetch
  if (error) {
    return <pre>{error}</pre>
  }

  return (
    <section className="location_container">
      {isLoading ? (
        // Affiche le loader pendant le chargement
        <div className="loader_wrapper">
          <Loader data-testid="loader" />
        </div>
      ) : (
        // Affiche la liste des logements sous forme de liens vers chaque logement
        data.map((logement) => (
          <Link className="location_link" key={logement.id} to={`/Logement/${logement.id}`}>
            <img className="location_img" key={"cover"+logement.id} src={logement.cover} alt={logement.title} />
            <h2 className="location_title" key={"title"+logement.id}>{logement.title}</h2>
            <div className="background"></div>
          </Link>
        ))
      )}
    </section>
  )
}
