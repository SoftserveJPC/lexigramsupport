import React from 'react';
import { languages } from '../utilities/constants';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/footer.css';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // change language globally
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <Link to="/" className="footer-logo">
          <img className="footer-logo-image" src="../assets/logo.png" alt="Logo" />
        </Link>

        <select
          className="footer-language-select"
          defaultValue={i18n.language}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.flag} {lang.name}
            </option>
          ))}
        </select>

        <div className="footer-links">
          <Link to="/privacy">{t('footer.links.privacy')}</Link>
          <Link to="/terms">{t('footer.links.terms')}</Link>
          <Link to="/contact">{t('footer.links.contact')}</Link>
        </div>
      </div>

      <p className="footer-copy">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
    </footer>
  );
};

export default Footer;
