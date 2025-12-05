import React from 'react';
import Masonry from 'react-masonry-css';
import { categories } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
};

const CategorySection = () => {
    const { t } = useLanguage();

    const handleCategoryClick = (categoryId) => {
        const element = document.getElementById(categoryId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="categories" className="container" style={{ padding: '4rem 2rem', scrollMarginTop: '100px' }}>
            <h2 className="section-title">{t('shopBySport')}</h2>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {categories.map((category) => (
                  <div
                    key={category.id}
                    id={category.id}
                    className="glass-card product-card category-card"
                    onClick={() => handleCategoryClick(category.id)}
                    style={{ cursor: 'pointer' }}
                  >
                        <div className="product-image-wrapper">
                            <img src={category.image} alt={category.title} className="product-image" />
                        </div>
                        <div className="product-info">
                            <div className="product-category">{t('collection')}</div>
                            <h3 className="product-title">{t(category.id)}</h3>
                            <p className="product-price">{t(`${category.id}Desc`)}</p>
                        </div>
                    </div>
                ))}
            </Masonry>
        </section>
    );
};

export default CategorySection;
