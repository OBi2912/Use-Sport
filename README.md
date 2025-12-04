# 🏆 Use Sport - Premium Sports Equipment E-commerce

![Use Sport Logo](public/logo.svg)

A modern, responsive e-commerce website for premium sports equipment. Built with React and featuring a sleek glassmorphism design, multi-language support, and a comprehensive shopping experience.

## ✨ Features

### 🛍️ E-commerce Functionality
- **Product Catalog**: Browse sports equipment across 6 categories (Soccer, Basketball, Swimming, Golf, Baseball, Tennis)
- **Product Details**: Interactive product modals with high-quality images
- **Shopping Cart**: Add, remove, and manage cart items with real-time updates
- **Checkout Process**: Complete checkout flow with form validation and payment options

### 🌐 Multi-language Support
- **English & Spanish**: Full internationalization with context-aware translations
- **Language Toggle**: Easy language switching in the navigation bar
- **RTL Support**: Ready for future right-to-left language additions

### 📱 Responsive Design
- **Mobile-First**: Optimized for all screen sizes from mobile to desktop
- **Progressive Enhancement**: Smooth animations and transitions
- **Touch-Friendly**: Optimized for mobile interactions

### 🎨 Modern UI/UX
- **Glassmorphism Design**: Modern glass-like effects with backdrop blur
- **Dark Theme**: Sleek dark theme optimized for e-commerce
- **Smooth Animations**: CSS transitions and hover effects
- **Masonry Layout**: Pinterest-style product grid layout

## 🚀 Technologies Used

### Frontend Framework
- **React 19** - Latest React with concurrent features
- **React Router** - Client-side routing for SPA navigation
- **React Masonry CSS** - Dynamic grid layout for products

### Styling & UI
- **CSS3** - Modern CSS with custom properties
- **Glassmorphism** - Advanced backdrop-filter effects
- **Responsive Grid** - CSS Grid and Flexbox layouts

### Development Tools
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and quality assurance
- **Babel** - JavaScript transpilation

### State Management
- **React Context** - Global state for cart and language
- **Custom Hooks** - Reusable state logic

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd use-sport
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
use-sport/
├── public/
│   ├── logo.svg          # Brand logo
│   └── vite.svg          # Vite default icon
├── src/
│   ├── assets/           # Static images
│   ├── components/       # React components
│   │   ├── Navbar.jsx    # Navigation component
│   │   ├── Hero.jsx      # Hero section
│   │   ├── CategorySection.jsx
│   │   ├── AllProducts.jsx
│   │   ├── ProductModal.jsx
│   │   ├── CheckoutPage.jsx
│   │   └── Footer.jsx
│   ├── context/          # React Context providers
│   │   ├── CartContext.jsx
│   │   └── LanguageContext.jsx
│   ├── data/             # Static data
│   │   └── products.js   # Product catalog
│   ├── styles/           # Component-specific styles
│   │   └── footer.css
│   ├── App.jsx           # Main app component
│   ├── App.css           # App-specific styles
│   ├── index.css         # Global styles
│   └── main.jsx          # App entry point
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint configuration
└── README.md            # This file
```

## 🎯 Usage

### Navigation
- **Home**: Browse featured categories and products
- **Categories**: Click category cards to jump to specific sport sections
- **Products**: Click any product card to view details in a modal
- **Cart**: Add products to cart and proceed to checkout
- **Language**: Toggle between English and Spanish

### Shopping Flow
1. Browse products by category or scroll through all products
2. Click on products to view detailed information
3. Add desired items to cart
4. Click cart icon to review items
5. Proceed to checkout with form validation
6. Complete purchase with payment options

## 🌟 Key Features Explained

### Product Catalog
- **6 Sport Categories**: Comprehensive coverage of major sports
- **Real Product Images**: High-quality photos from sports retailers
- **Masonry Grid**: Responsive grid that adapts to screen size
- **Product Modals**: Detailed product views with add-to-cart functionality

### Shopping Cart
- **Persistent State**: Cart items maintained across page refreshes
- **Quantity Management**: Add, remove, and update item quantities
- **Real-time Updates**: Live cart total and badge updates
- **Checkout Integration**: Seamless transition to checkout process

### Internationalization
- **Complete Translation**: All UI text translated to Spanish
- **Context-Aware**: Translations adapt to current language setting
- **Language Persistence**: Language preference saved in local state

### Responsive Design
- **Breakpoint Strategy**: 1200px, 900px, 768px, 600px, 480px breakpoints
- **Mobile Optimization**: Touch targets, readable fonts, optimized layouts
- **Progressive Enhancement**: Features scale based on device capabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow React best practices and hooks patterns
- Maintain responsive design principles
- Ensure accessibility compliance
- Write clean, documented code
- Test on multiple devices and browsers

## 📄 License

This project is private and proprietary. All rights reserved.

## 👨‍💻 Author

**Use Sport Team**
- Project: Premium Sports Equipment E-commerce Platform
- Technologies: React, CSS3, Vite
- Design: Glassmorphism, Dark Theme, Responsive

## 📞 Support

For support or questions about this project:
- Create an issue in the repository
- Contact the development team
- Check the documentation for common solutions

---

**Made with ❤️ for sports enthusiasts worldwide**