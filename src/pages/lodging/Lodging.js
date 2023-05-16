import './lodging.scss';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import datas from '../../data/data';
import Header from '../../components/header/Header';
import Carousel from '../../components/carousel/carousel';
import Footer from '../../components/Footer/Footer';
import Collapse from '../../components/collapse/Collapse';
import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';

export default function Lodging() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentLodging, setCurrentLodging] = useState(null);
  useEffect(() => {
    const lodging = datas.find((data) => data.id === id);
    if (!lodging) {
      navigate('/error');
    } else {
      setCurrentLodging(lodging);
    }
  }, [id, navigate]);

  if (!currentLodging) return null;

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
  const [firstName, lastName] = host.name.split(' ');

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
                return <button key={index}>{tag}</button>;
              })}
            </div>
          </div>
          <div className="lodging_content_host">
            <div>
              <div className="lodging_content_host_name">
                <span>{firstName}</span>
                <span>{lastName}</span>
              </div>
              <img src={host.picture} alt="host of this lodging" />
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
