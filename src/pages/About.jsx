import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import aboutCoverImage from '../assets/about_cover.png';
import aboutCoverImageMobile from '../assets/about_cover_m.png';

const About = () => {
  return (
    <div>
      <Header />
      <Banner
        image={aboutCoverImage}
        mobileImage={aboutCoverImageMobile}
        className="about-banner"
      />
      <Footer />
    </div>
  );
};

export default About;
