import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const translations = {
    en: {
        // Navbar
        shopNow: 'Shop Now',

        // Hero
        heroTitle: 'Elevate Your Game',
        heroSubtitle: 'Premium gear for Soccer, Basketball, Swimming, Golf, Baseball, Tennis, Hockey, Rugby, Volleyball, and Formula 1.',
        exploreCollection: 'Explore Collection',

        // Categories
        shopBySport: 'Shop by Sport',
        collection: 'Collection',
        trustedBrands: 'Trusted by Top Brands',
        featuredProducts: 'Featured Products',

        // Products
        addToCart: 'Add to Cart',
        gear: 'Gear',

        // Checkout
        secureCheckout: 'Secure Checkout',
        cart: 'Cart',
        information: 'Information',
        payment: 'Payment',
        reviewCart: 'Review Your Cart',
        continueToShipping: 'Continue to Shipping',
        shippingInformation: 'Shipping Information',
        contactInformation: 'Contact Information',
        emailAddress: 'Email Address',
        phoneNumber: 'Phone Number',
        shippingAddress: 'Shipping Address',
        firstName: 'First Name',
        lastName: 'Last Name',
        streetAddress: 'Street Address',
        city: 'City',
        state: 'State',
        zipCode: 'ZIP Code',
        country: 'Country',
        back: 'Back',
        continueToPayment: 'Continue to Payment',
        paymentMethod: 'Payment Method',
        applePay: 'Apple Pay',
        googlePay: 'Google Pay',
        creditCard: 'Credit / Debit Card',
        cardNumber: 'Card Number',
        cardholderName: 'Cardholder Name',
        placeOrder: 'Place Order',
        orderSummary: 'Order Summary',
        subtotal: 'Subtotal',
        shipping: 'Shipping',
        free: 'Free',
        tax: 'Tax',
        total: 'Total',
        secureCheckoutBadge: 'Secure Checkout',
        cartEmpty: 'Your Cart is Empty',
        continueShopping: 'Continue Shopping',
        orderSuccess: 'Order Placed Successfully!',
        orderThankYou: 'Thank you for your purchase. You will receive a confirmation email shortly.',
        redirecting: 'Redirecting to home page...',

        // Footer
        footerTagline: 'Premium sports equipment for champions.',
        footerRights: 'All rights reserved By OBi.',
        followUs: 'Follow Us',
        quickLinks: 'Quick Links',
        home: 'Home',
        shop: 'Shop',
        about: 'About',
        contact: 'Contact',

        // Sports
        soccer: 'Soccer',
        basketball: 'Basketball',
        swimming: 'Swimming',
        golf: 'Golf',
        baseball: 'Baseball',
        tennis: 'Tennis',
        hockey: 'Hockey',
        rugby: 'Rugby',
        volleyball: 'Volleyball',
        formula1: 'Formula 1',

        // Descriptions
        soccerDesc: 'Elite gear for the beautiful game.',
        basketballDesc: 'Dominate the court with premium equipment.',
        swimmingDesc: 'Streamlined gear for maximum speed.',
        golfDesc: 'Precision instruments for the perfect swing.',
        baseballDesc: 'Classic gear for America\'s pastime.',
        tennisDesc: 'Serve an ace with top-tier rackets.',
        hockeyDesc: 'Ice gear for the fastest sport on ice.',
        rugbyDesc: 'Tough gear for the ultimate team sport.',
        volleyballDesc: 'Spike your game with professional equipment.',
        formula1Desc: 'High-speed gear for racing enthusiasts.',
    },
    es: {
        // Navbar
        shopNow: 'Comprar Ahora',

        // Hero
        heroTitle: 'Eleva Tu Juego',
        heroSubtitle: 'Equipo premium para Fútbol, Baloncesto, Natación, Golf, Béisbol, Tenis, Hockey, Rugby, Voleibol y Fórmula 1.',
        exploreCollection: 'Explorar Colección',

        // Categories
        shopBySport: 'Comprar por Deporte',
        collection: 'Colección',
        trustedBrands: 'Confianza de las Mejores Marcas',
        featuredProducts: 'Productos Destacados',

        // Products
        addToCart: 'Agregar al Carrito',
        gear: 'Equipo',

        // Checkout
        secureCheckout: 'Pago Seguro',
        cart: 'Carrito',
        information: 'Información',
        payment: 'Pago',
        reviewCart: 'Revisar Tu Carrito',
        continueToShipping: 'Continuar al Envío',
        shippingInformation: 'Información de Envío',
        contactInformation: 'Información de Contacto',
        emailAddress: 'Correo Electrónico',
        phoneNumber: 'Número de Teléfono',
        shippingAddress: 'Dirección de Envío',
        firstName: 'Nombre',
        lastName: 'Apellido',
        streetAddress: 'Dirección',
        city: 'Ciudad',
        state: 'Estado',
        zipCode: 'Código Postal',
        country: 'País',
        back: 'Atrás',
        continueToPayment: 'Continuar al Pago',
        paymentMethod: 'Método de Pago',
        applePay: 'Apple Pay',
        googlePay: 'Google Pay',
        creditCard: 'Tarjeta de Crédito / Débito',
        cardNumber: 'Número de Tarjeta',
        cardholderName: 'Nombre del Titular',
        placeOrder: 'Realizar Pedido',
        orderSummary: 'Resumen del Pedido',
        subtotal: 'Subtotal',
        shipping: 'Envío',
        free: 'Gratis',
        tax: 'Impuesto',
        total: 'Total',
        secureCheckoutBadge: 'Pago Seguro',
        cartEmpty: 'Tu Carrito Está Vacío',
        continueShopping: 'Continuar Comprando',
        orderSuccess: '¡Pedido Realizado con Éxito!',
        orderThankYou: 'Gracias por tu compra. Recibirás un correo de confirmación en breve.',
        redirecting: 'Redirigiendo a la página principal...',

        // Footer
        footerTagline: 'Equipo deportivo premium para campeones.',
        footerRights: 'Todos los derechos reservados por OBi.',
        followUs: 'Síguenos',
        quickLinks: 'Enlaces Rápidos',
        home: 'Inicio',
        shop: 'Tienda',
        about: 'Acerca de',
        contact: 'Contacto',

        // Sports
        soccer: 'Fútbol',
        basketball: 'Baloncesto',
        swimming: 'Natación',
        golf: 'Golf',
        baseball: 'Béisbol',
        tennis: 'Tenis',
        hockey: 'Hockey',
        rugby: 'Rugby',
        volleyball: 'Voleibol',
        formula1: 'Fórmula 1',

        // Descriptions
        soccerDesc: 'Equipo de élite para el deporte rey.',
        basketballDesc: 'Domina la cancha con equipo premium.',
        swimmingDesc: 'Equipo aerodinámico para máxima velocidad.',
        golfDesc: 'Instrumentos de precisión para el swing perfecto.',
        baseballDesc: 'Equipo clásico para el pasatiempo de América.',
        tennisDesc: 'Saca un ace con raquetas de primera.',
        hockeyDesc: 'Equipo de hielo para el deporte más rápido sobre hielo.',
        rugbyDesc: 'Equipo resistente para el deporte de equipo definitivo.',
        volleyballDesc: 'Impulsa tu juego con equipo profesional.',
        formula1Desc: 'Equipo de alta velocidad para entusiastas de las carreras.',
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('es');

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'es' : 'en');
    };

    const t = (key) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
