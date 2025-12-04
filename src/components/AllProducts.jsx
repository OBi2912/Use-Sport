import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import { categories } from '../data/products';
import ProductModal from './ProductModal';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

const AllProducts = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { addToCart } = useCart();
    const { t } = useLanguage();

    return (
        <div className="container">
            {categories.map((cat) => (
                <section key={cat.id} id={cat.id} style={{ marginBottom: '4rem', scrollMarginTop: '100px' }}>
                    <h2 className="section-title" style={{ fontSize: '2rem', textAlign: 'left' }}>{t(cat.id)} {t('gear')}</h2>
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {cat.products.map((product) => (
                            <div
                                key={product.id}
                                className="glass-card product-card"
                                onClick={() => setSelectedProduct(product)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="product-image-wrapper">
                                    <img src={product.image} alt={product.name} className="product-image" />
                                </div>
                                <div className="product-info">
                                    <div className="product-category">{t(cat.id)}</div>
                                    <h3 className="product-title" style={{ fontSize: '1.2rem' }}>{product.name}</h3>
                                    <p className="product-price">${product.price}</p>
                                    <button
                                        className="btn-primary"
                                        style={{ marginTop: '1rem', width: '100%', padding: '0.5rem' }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToCart(product);
                                        }}
                                    >
                                        {t('addToCart')}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </Masonry>
                </section>
            ))}
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </div>
    );
};

export default AllProducts;
