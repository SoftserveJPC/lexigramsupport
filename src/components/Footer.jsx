import React from 'react'
import { languages } from '../utilities/constants'
import { Link } from 'react-router-dom'
import '../styles/footer.css'
import { useTranslation } from 'react-i18next';

const Footer = () => {
     const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        console.log("Changing language to:", lng);
        i18n.changeLanguage(lng); // 'en', 'fr', 'es', etc.
    };
    return (
        <footer className="footer">
            <div className="footer-content">
                
                <Link to="/" className="footer-logo">
                    <img className="footer-logo-image" src="../assets/logo.png" alt="Logo" />
                </Link>
                <select
                        className="footer-language-select" 
                        defaultValue={i18n.language} // default to current language
                        onChange={(e) => changeLanguage(e.target.value)}>
                            {languages.map((lang) => (
                                <option key={lang.code} value={lang.code}>
                                    <span>{ lang.flag }</span>
                                    <span>{lang.name}</span>
                                </option>
                            ))}
                    </select>

                <div className="footer-links">
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms of Service</Link>
                    <Link to="/contact">Contact</Link>
                    
                </div>

            </div>

            <p className="footer-copy">© {new Date().getFullYear()} Lexigram All rights reserved.</p>
        </footer>
    )
}

export default Footer
