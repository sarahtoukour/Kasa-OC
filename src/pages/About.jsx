import React from 'react';
import Header from '../components/header/Header';
import Banner from '../components/banner/Banner';
import Footer from '../components/Footer/Footer';
import aboutCoverImage from '../assets/about_cover.png';
import aboutCoverImageMobile from '../assets/about_cover_m.png';

const About = () => {
  return (
    <div>
      <Header />
      <Banner
        image={aboutCoverImage}
        imageMobile={aboutCoverImageMobile}
        className="about-banner"
      />
      <Footer />
    </div>
  );
};

export default About;
