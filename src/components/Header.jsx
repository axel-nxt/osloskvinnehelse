import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <header className="header-container">
            <div className="container header-content">
                <a href="https://oslokvinnehelse.no" target="_blank" rel="noopener noreferrer" className="logo-link">
                    <img
                        src="https://oslokvinnehelse.no/wp-content/uploads/2024/12/OsloKvinneHelse__staende_sort-uten-bakgrunn-crop-2.png"
                        alt="OsloKvinnehelse"
                        className="logo"
                    />
                </a>
                <nav className="header-nav">
                    <a href="#teknisk" className="nav-link">Teknisk Analyse</a>
                    <a href="#seo" className="nav-link">SEO Synlighet</a>
                    <a href="#konkurrent" className="nav-link">Konkurrenter</a>
                    <a href="#tiltak" className="btn btn-primary">Se Tiltak</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
