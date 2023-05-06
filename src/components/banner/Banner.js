import './_Banner.scss';

function detectMobileScreen() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    return true; // mobile
  } else {
    return false; // non mobile
  }
}
const Banner = (props) => {
  const { image, imageMobile, className, text } = props;
  var myImage = '';
  if (detectMobileScreen() === true && imageMobile) {
    myImage = imageMobile;
  } else {
    myImage = image;
  }
  console.log(myImage);
  console.log(imageMobile);

  return (
    <div className="home-banner-container">
      <p className="titre-banner"> {text}</p>
      <div className={`banner ${className}`}>
        <img src={myImage} alt="Banner" className="banner__image" />
      </div>
    </div>
  );
};

export default Banner;
