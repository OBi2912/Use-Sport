import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './BrandCarousel.css';

const BrandCarousel = () => {
  const { t } = useLanguage();
  const brands = [
    { name: 'Nike', logo: 'NIKE', category: 'soccer' },
    { name: 'Adidas', logo: 'ADIDAS', category: 'basketball' },
    { name: 'Puma', logo: 'PUMA', category: 'tennis' },
    { name: 'Under Armour', logo: 'UNDER ARMOUR', category: 'baseball' },
    { name: 'Reebok', logo: 'REEBOK', category: 'golf' },
    { name: 'New Balance', logo: 'NEW BALANCE', category: 'swimming' },
    { name: 'Asics', logo: 'ASICS', category: 'hockey' },
    { name: 'Wilson', logo: 'WILSON', category: 'formula1' },
  ];

  const handleBrandClick = (categoryId) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="brand-carousel">
      <div className="container">
        <h2 className="carousel-title">{t('trustedBrands')}</h2>
        <div className="carousel-wrapper">
          <div className="carousel-track">
            {brands.concat(brands).map((brand, index) => (
              <div
                key={index}
                className="brand-item"
                onClick={() => handleBrandClick(brand.category)}
                style={{ cursor: 'pointer' }}
              >
                <div className="brand-logo">{brand.logo}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;