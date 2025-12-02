import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/navbar.css';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="nav-bar">
      <Link to="/" className="logo">
        <img className="logo-image" src="../assets/logo.png" alt="Logo" />
      </Link>
      <div className="links-cont">
        <Link to="/privacy">{t('navbar.links.privacy')}</Link>
        <Link to="/terms">{t('navbar.links.terms')}</Link>
      </div>
    </nav>
  );
};

export default Navbar;
