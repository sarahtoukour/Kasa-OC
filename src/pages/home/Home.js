import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/banner/Banner';
import homeCoverPicture from '../../assets/home_cover.png';
import Gallery from '../../components/gallery/Gallery';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner
        picture={homeCoverPicture}
        className="home_banner"
        text="Chez vous, partout et ailleurs"
        altText="Paysage d'une côte rocheuse"
      />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
