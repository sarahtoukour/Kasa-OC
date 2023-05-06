import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/Footer/Footer';
import Banner from '../components/banner/Banner';
import homeCoverImage from '../assets/home_cover.png';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner
        image={homeCoverImage}
        className="home-banner"
        text="Chez vous, partout et ailleurs"
      />
      <Footer />
    </div>
  );
};

export default Home;
