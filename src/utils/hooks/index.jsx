import { useState, useEffect } from 'react'

// Hook personnalisé pour gérer un appel API
export function useFetch(url) {
  // État local pour stocker les données, le chargement et l'erreur
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return // si pas d'URL, on ne fait rien

    setLoading(true) // quand on lance un nouvel appel, on active le loader

    async function fetchData() {
      try {
        // Appel de l’API
        const response = await fetch(url)
        const data = await response.json()

        // Mise à jour des données
        setData(data)
      } catch (err) {
        // En cas d'erreur → on log et on met error à true
        console.log(err)
        setError(true)
      } finally {
        // Qu’il y ait une erreur ou pas → on arrête le loader
        setLoading(false)
      }
    }

    fetchData()
  }, [url]) // l’effet se relance si l’URL change

  // Le hook renvoie un objet utilisable dans un composant
  return { isLoading, data, error }
}
