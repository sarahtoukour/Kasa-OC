import './lodging.scss';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import datas from '../../data/data';
import Header from '../../components/header/Header';
import Carousel from '../../components/carousel/carousel';
import Footer from '../../components/Footer/Footer';
import Collapse from '../../components/collapse/Collapse';
import Tag from '../../components/tag/Tag';
import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.svg';

// Composant principal pour afficher les informations détaillées sur un hébergement
export default function Lodging() {
  // Récupération de l'ID du paramètre dans l'URL
  const { id } = useParams();

  // Initialisation de la fonction de navigation pour permettre la redirection
  const navigate = useNavigate();

  // Déclaration de l'état pour stocker les informations du logement actuel
  const [currentLodging, setCurrentLodging] = useState(null);

  // Hook d'effet pour récupérer les informations du logement lors du montage du composant
  useEffect(() => {
    // Recherche du logement correspondant à l'ID dans les données
    const lodging = datas.find((data) => data.id === id);

    // Redirection vers la page d'erreur si aucun logement n'est trouvé
    if (!lodging) {
      navigate('/error');
    } else {
      // Mise à jour de l'état avec les informations du logement actuel
      setCurrentLodging(lodging);
    }
    // Dépendances du hook useEffect
  }, [id, navigate]);

  // Si le logement actuel n'est pas chargé, on ne rend rien
  if (!currentLodging) return null;

  // Extraction des informations du logement actuel dans des variables individuelles
  const {
    pictures,
    host,
    rating,
    description,
    equipments,
    title,
    location,
    tags,
  } = currentLodging;

  // Séparation du prénom et du nom de l'hôte
  const [firstName, lastName] = host.name.split(' ');

  // Rendu du composant
  return (
    <>
      <Header />
      <Carousel carouselPictures={pictures} />
      <main className="lodging">
        <div className="lodging_content">
          <div className="lodging_content_infos">
            <h1>{title}</h1>
            <p>{location}</p>
            <div>
              {tags.map((tag, index) => {
                return <Tag key={index} tag={tag} />;
              })}
            </div>
          </div>
          <div className="lodging_content_host">
            <div>
              <div className="lodging_content_host_name">
                <span>{firstName}</span>
                <span>{lastName}</span>
              </div>
              <img src={host.picture} alt="hôte de ce logement" />
            </div>

            <div className="lodging_content_host_stars">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <img
                    key={index}
                    src={ratingValue <= rating ? redStar : greyStar}
                    alt="star"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="lodging_collapse">
          <div className="lodging_collapse_item">
            <Collapse title={'Description'} content={description} />
          </div>
          <div className="lodging_collapse_item">
            <Collapse title={'Équipements'} content={equipments} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
