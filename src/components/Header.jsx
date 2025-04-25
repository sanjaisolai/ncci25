import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import svceLogo from '../photo/ait1.jpg'; 
import ait from '../photo/svce.png';
import "../styles/Header.css";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        if (window.innerWidth <= 992) {
            setIsOpen(false);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
            <div className="d-flex align-items-center">
                {/* Logo with rounded styling */}
                <img 
                    src={ait} 
                    alt="SVCE Logo" 
                    width="40" 
                    height="40" 
                    className="rounded-circle me-2 border border-2 border-white"
                    style={{ objectFit: 'cover' }}
                />
                <img 
                    src={svceLogo} 
                    alt="SVCE Logo" 
                    width="40" 
                    height="40" 
                    className="rounded-circle me-2 border border-2 border-white"
                    style={{ objectFit: 'cover' }}
                />
                <Link className="navbar-brand fw-bold text-white" to="/"></Link>
            </div>
            
            {/* Hamburger menu button */}
            <button 
                className="navbar-toggler" 
                type="button" 
                onClick={toggleMenu}
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            
            {/* Collapsible menu */}
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                <ul className="navbar-nav ms-auto">
                    {[
                        { path: "/", name: "Home" },
                        { path: "/about", name: "About" },
                        { path: "/ConferenceAbout", name: "About Conference" },
                        { path: "/TimeLine", name: "Time Line"},
                        { path: "/ThemeCards", name: "Theme" },
                        { path: "/PersonCards", name: "Coordinators" },
                        { path: "/StudentCoord", name: "Student Coordinators" },
                        { path: "/ContactPage", name: "Contact us" },
                    ].map((item) => (
                        <li className="nav-item" key={item.path}>
                            <Link 
                                className="nav-link text-white position-relative px-3 mx-1" 
                                to={item.path}
                                onClick={closeMenu}
                                style={{
                                    transition: 'all 0.3s ease',
                                    borderRadius: '4px'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#4a5568';
                                    e.currentTarget.style.border = '1px solid #ffffff';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.border = '1px solid transparent';
                                }}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Header;