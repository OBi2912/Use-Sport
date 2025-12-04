import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { cartCount } = useCart();
    const { t, toggleLanguage, language } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <Link to="/" className="logo">
                    <img src="/logo.svg" alt="Use Sport Logo" className="logo-icon" />
                    Use<span>Sport</span>
                </Link>
                <div className="nav-links">
                    {/* Add links if needed */}
                </div>
                <div className="nav-actions">
                    <button className="language-toggle language-toggle-small" onClick={toggleLanguage}>
                        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                            <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
                        </svg>
                        <span>{language === 'en' ? 'ES' : 'EN'}</span>
                    </button>
                    <Link to="/checkout" className="cart-link">
                        <span className="cart-icon">🛒</span>
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </Link>
                    <button className="btn-primary nav-btn">{t('shopNow')}</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
