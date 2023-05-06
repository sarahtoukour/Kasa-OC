import './_Banner.scss';

const Banner = (props) => {
  const { image, className } = props;

  return (
    <div className={`banner ${className}`}>
      <img src={image} alt="Banner" className="banner__image" />
    </div>
  );
};

export default Banner;
