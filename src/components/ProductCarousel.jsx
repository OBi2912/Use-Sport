import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './ProductCarousel.css';

const ProductCarousel = () => {
  const { t } = useLanguage();

  // Sample products from different categories
  const sampleProducts = [
    {
      id: 's1',
      name: 'Nike Mercurial Superfly',
      price: 250,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300',
      category: 'soccer'
    },
    {
      id: 'b1',
      name: 'Nike LeBron Witness',
      price: 180,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300',
      category: 'basketball'
    },
    {
      id: 'w1',
      name: 'Speedo Fastskin Goggles',
      price: 35,
      image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=300',
      category: 'swimming'
    },
    {
      id: 'g1',
      name: 'Callaway Epic Driver',
      price: 500,
      image: 'https://images.unsplash.com/photo-1587174486073-ae3f2e2a2aa5?w=300',
      category: 'golf'
    },
    {
      id: 'bb1',
      name: 'Rawlings Heart of the Hide',
      price: 300,
      image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=300',
      category: 'baseball'
    },
    {
      id: 't1',
      name: 'Wilson Pro Staff',
      price: 250,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300',
      category: 'tennis'
    },
    {
      id: 'h1',
      name: 'Bauer Vapor Skates',
      price: 400,
      image: 'https://images.unsplash.com/photo-1551537130-e386cf0288fb?w=300',
      category: 'hockey'
    },
    {
      id: 'f1',
      name: 'Schuberth R2 Helmet',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300',
      category: 'formula1'
    }
  ];

  return (
    <section className="product-carousel">
      <div className="container">
        <h2 className="carousel-title">{t('featuredProducts')}</h2>
        <div className="carousel-wrapper">
          <div className="carousel-track">
            {sampleProducts.concat(sampleProducts).map((product, index) => (
              <div key={`${product.id}-${index}`} className="product-item">
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} className="product-image" />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;