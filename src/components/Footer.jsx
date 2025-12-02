import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                
                <Link to="/" className="footer-logo">
                    <img className="footer-logo-image" src="../assets/logo.png" alt="Logo" />
                </Link>

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
