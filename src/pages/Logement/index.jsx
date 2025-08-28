import React from 'react';
import './logement.scss';
import Carousel from "../../components/Carousel/carousel";
import Rating from '../../components/Rating';
import { useParams, Navigate } from 'react-router-dom';
import Collapse from '../../components/Collapse/collapse';

function Logement() {
  const data = require("../../logements.json");
  const { logementId } = useParams();

  const logement = data.find(item => item.id === logementId);

  if (!logement) return <Navigate replace to="/error" />;

  return (
    <main className='main_location'>
      <section>
        <div className='carousel_location'>
          <Carousel img={logement.pictures} />
        </div>

        <div className='location'>
          <div className='location_header'>
            <h2 className='location_header_title'>{logement.title}</h2>
            <div className='location_header_city'>{logement.location}</div>
            <ul className='location_header_tags'>
              {logement.tags.map(tag => (
                <li className='location_header_tags_tag' key={tag}>{tag}</li>
              ))}
            </ul>
          </div>

          <div className='location_host'>
            <div className='location_host_info'>
              <div className='host_name'>{logement.host.name}</div>
              <img className='host_picture' src={logement.host.picture} alt={logement.host.name} />
            </div>
            <div className='host_rating'>
              <Rating rating={logement.rating} />
            </div>
          </div>
        </div>

        <div className='collapse_container' style={{ display: 'flex', gap: '200px' }}>
          <Collapse title="Description">
            <p>{logement.description}</p>
          </Collapse>

          <Collapse title="Équipements">
            <ul>
              {logement.equipments.map(equipment => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </section>
    </main>
  );
}

export default Logement;
