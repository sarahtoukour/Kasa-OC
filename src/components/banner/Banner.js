import './_Banner.scss';

function detectMobileScreen() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    return true; // mobile
  } else {
    return false; // non mobile
  }
}

const Banner = ({ image, imageMobile, className, text }) => {
  let myImage = '';
  if (detectMobileScreen() === true && imageMobile) {
    myImage = imageMobile;
  } else {
    myImage = image;
  }
  // console.log(myImage);
  // console.log(imageMobile);

  return (
    <div className="home_banner_container">
      <p className="banner_title"> {text}</p>
      <div className={`banner ${className}`}>
        <img
          src={myImage}
          alt="Paysage d'une côte rocheuse"
          className="banner_image"
        />
      </div>
    </div>
  );
};

export default Banner;
