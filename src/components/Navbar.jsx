import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <nav className='nav-bar'>
            <Link to="/" className="logo">
                <img className='logo-image' src="../assets/logo.png" alt="Logo" />
            </Link>
            <div className="links-cont">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
            </div>
        </nav>
    )
}

export default Navbar