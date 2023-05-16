import React from 'react';
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';
import './error.scss';
import Footer from '../../components/Footer/Footer';

const Error = () => {
  return (
    <>
      <Header />
      <div className="error">
        <div className="error_infos">
          <h1 className="error_infos_title">404</h1>
          <p className="error_infos_content">
            La page que vous recherchez n'existe pas.
          </p>
          <Link className="error_infos_return" to="/">
            Retourner sur la page d'accueil
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Error;
