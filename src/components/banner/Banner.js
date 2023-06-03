import './Banner.scss';

// Fonction pour détecter si l'écran est de taille mobile ou non
function detectMobileScreen() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    return true; // mobile
  } else {
    return false; // non mobile
  }
}

// Définition du composant Banner
const Banner = ({ picture, pictureMobile, className, text, altText }) => {
  // Variable pour stocker l'image à afficher
  let myPicture = '';

  // Condition pour déterminer quelle image utiliser en fonction de la détection d'écran mobile et de la disponibilité de l'image mobile
  if (detectMobileScreen() === true && pictureMobile) {
    // Utiliser l'image mobile si l'écran est de taille mobile
    myPicture = pictureMobile;
  } else {
    // Utiliser l'image par défaut si l'écran n'est pas de taille mobile ou si l'image mobile n'est pas fournie
    myPicture = picture;
  }

  return (
    <div className="home_banner_container">
      <p className="banner_title"> {text}</p>
      <div className={`banner ${className}`}>
        <img src={myPicture} alt={altText} className="banner_picture" />
      </div>
    </div>
  );
};

export default Banner;
