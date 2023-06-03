import './carousel.scss';
import ArrowRight from '../../assets/chevron_carousel_right.png';
import ArrowLeft from '../../assets/chevron_carousel_left.png';
import { useState } from 'react';

export default function Carousel({ carouselPictures }) {
  // L'état currentIndex est utilisé pour garder une trace de l'image actuellement affichée dans le carrousel. Il est initialisé à 0, donc le carrousel affiche d'abord la première image de la liste.
  const [currentIndex, setCurrentIndex] = useState(0);

  // Si aucune image n'est fournie, on ne rend rien
  if (!carouselPictures) return null;

  // Calcul du nombre total d'images
  const totalPictures = carouselPictures.length;

  const nextPicture = () => {
    // nextPicture augmente currentIndex de 1, et si currentIndex dépasse la fin de la liste d'images, il retourne à 0 (c'est ce que fait l'opérateur modulo `%`), créant ainsi une boucle.
    setCurrentIndex((currentIndex + 1) % totalPictures);
  };

  const prevPicture = () => {
    // prevPicture diminue currentIndex de 1, et si currentIndex devient négatif, il est ramené à la fin de la liste, créant également une boucle.
    setCurrentIndex((currentIndex - 1 + totalPictures) % totalPictures);
  };

  return (
    <section
      // On définit l'image de fond de la section en utilisant l'image courante
      style={{ backgroundImage: `url(${carouselPictures[currentIndex]})` }}
      className="carousel"
    >
      {/* Si le carrousel a plus d'une image, on affiche les flèches de navigation et le compteur d'images */}
      {carouselPictures.length > 1 && (
        <>
          <img
            className="carousel_arrow carousel_arrow_right"
            src={ArrowRight}
            alt="bouton suivant"
            onClick={nextPicture}
          />
          <img
            className="carousel_arrow carousel_arrow_left"
            src={ArrowLeft}
            alt="bouton précédent"
            onClick={prevPicture}
          />
          {/* Affichage du nombre courant de l'image et du nombre total d'images */}
          <p className="count">
            {currentIndex + 1} / {carouselPictures.length}
          </p>
        </>
      )}
    </section>
  );
}
