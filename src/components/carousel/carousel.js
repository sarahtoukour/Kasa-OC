import './carousel.scss';
import ArrowRight from '../../assets/chevron_carousel_right.png';
import ArrowLeft from '../../assets/chevron_carousel_left.png';
import { useState } from 'react';

export default function Carousel({ carouselPictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  if (!carouselPictures) return null;
  const totalPictures = carouselPictures.length;

  const nextPicture = () => {
    setCurrentIndex((currentIndex + 1) % totalPictures);
  };

  const prevPicture = () => {
    setCurrentIndex((currentIndex - 1 + totalPictures) % totalPictures);
  };

  return (
    <section
      style={{ backgroundImage: `url(${carouselPictures[currentIndex]})` }}
      className="carousel"
    >
      {carouselPictures.length > 1 && (
        <>
          <img
            className="carousel_arrow carousel_arrow_right"
            src={ArrowRight}
            alt="show next"
            onClick={nextPicture}
          />
          <img
            className="carousel_arrow carousel_arrow_left"
            src={ArrowLeft}
            alt="show previous"
            onClick={prevPicture}
          />
          <p className="pictureCount">
            {currentIndex + 1} / {carouselPictures.length}
          </p>
        </>
      )}
    </section>
  );
}
