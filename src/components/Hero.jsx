import React from 'react';
import heroImg from '../assets/hero.png';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    const handleExploreClick = () => {
        const categoriesSection = document.getElementById('categories');
        if (categoriesSection) {
            categoriesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header className="hero">
            <img src={heroImg} alt="Sports Equipment" className="hero-bg" />
            <div className="hero-content">
                <h1 className="hero-title">{t('heroTitle')}</h1>
                <p className="hero-subtitle">{t('heroSubtitle')}</p>
                <button className="btn-primary" onClick={handleExploreClick}>{t('exploreCollection')}</button>
            </div>
        </header>
    );
};

export default Hero;
