import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const ProductModal = ({ product, onClose }) => {
    const { addToCart } = useCart();
    const { t, language } = useLanguage();

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    if (!product) return null;

    const descriptions = {
        en: `Experience top-tier performance with the ${product.name}. Designed for athletes who demand the best.`,
        es: `Experimenta un rendimiento de primer nivel con ${product.name}. Diseñado para atletas que exigen lo mejor.`
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>
                <div className="modal-body">
                    <div className="modal-image-wrapper">
                        <img src={product.image} alt={product.name} className="modal-image" />
                    </div>
                    <div className="modal-details">
                        <h2 className="modal-title">{product.name}</h2>
                        <p className="modal-price">${product.price}</p>
                        <p className="modal-description">
                            {descriptions[language]}
                        </p>
                        <button
                            className="btn-primary"
                            onClick={() => {
                                addToCart(product);
                                onClose();
                            }}
                        >
                            {t('addToCart')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
