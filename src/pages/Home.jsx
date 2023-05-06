import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import homeCoverImage from '../assets/home_cover.png';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-banner-container">
        <p className="titre-banner"> Chez vous, partout et ailleurs</p>
        <Banner image={homeCoverImage} className="home-banner" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
