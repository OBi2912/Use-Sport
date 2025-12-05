import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import BrandCarousel from './components/BrandCarousel';
import ProductCarousel from './components/ProductCarousel';
import AllProducts from './components/AllProducts';
import Footer from './components/Footer';
import CheckoutPage from './components/CheckoutPage';

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <Router>
          <div className="app">
            <Navbar />
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <CategorySection />
                  <BrandCarousel />
                  <ProductCarousel />
                  <AllProducts />
                </>
              } />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
