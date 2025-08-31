import React from 'react'
import BannerAbout from'../../assets/BannerAbout.png'
import Collapse from '../../components/Collapse/collapse';
import './about.scss'
 
function About() {
    return  (
    <main className='main_about'>
        <article className='banner'>
            <img className='banner_img' src={BannerAbout} alt="paysage montagne" />
        </article >

        <section className='section_about'>
            
            <div className='collapse_about_container'>
                <Collapse title="Fiabilité">
                  <p>
                    Les annonces postées sur Kasa garantissent une fiabilité totale. 
                    Les photos sont conformes aux logements, et toutes les informations 
                    sont régulièrement vérifiées par nos équipes.
                  </p>
                </Collapse>
            </div>

            <div className='collapse_about_container'>
                <Collapse title="Respect">
                  <p>
                    La bienveillance fait partie des valeurs fondatrices de Kasa. 
                    Tout comportement discriminatoire ou de perturbation du voisinage 
                    entraînera une exclusion de notre plateforme.
                  </p>
                </Collapse>
            </div>

            <div className='collapse_about_container'>
                <Collapse title="Service">
                  <p>
                    Nos équipes se tiennent à votre disposition pour vous fournir une 
                    expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                  </p>
                </Collapse>
            </div>

            <div className='collapse_about_container'>
                <Collapse title="Sécurité">
                  <p>
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que 
                    pour les voyageurs, chaque logement correspond aux critères de sécurité 
                    établis par nos services. En laissant une note aussi bien à l'hôte 
                    qu'au locataire, cela permet à nos équipes de vérifier que les standards 
                    sont bien respectés. Nous organisons également des ateliers sur la sécurité 
                    domestique pour nos hôtes.
                  </p>
                </Collapse>
            </div>

        </section>
     </main>
   )
}
export default About;



    