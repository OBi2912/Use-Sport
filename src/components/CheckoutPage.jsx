import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const CheckoutPage = () => {
    const { t } = useLanguage();
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState('');

    const [formData, setFormData] = useState({
        // Contact Information
        email: '',
        phone: '',

        // Shipping Information
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'United States',
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handlePlaceOrder = () => {
        if (!selectedPayment) {
            alert(t('payment') + ': ' + t('paymentMethod'));
            return;
        }

        // Simulate order processing
        setOrderPlaced(true);
        setTimeout(() => {
            clearCart();
            setTimeout(() => {
                navigate('/');
            }, 3000);
        }, 2000);
    };

    if (cart.length === 0 && !orderPlaced) {
        return (
            <div className="container" style={{ padding: '8rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
                <h2 className="section-title">{t('cartEmpty')}</h2>
                <Link to="/" className="btn-primary">{t('continueShopping')}</Link>
            </div>
        );
    }

    if (orderPlaced) {
        return (
            <div className="container" style={{ padding: '8rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
                <div className="order-success glass-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <div className="success-icon">✓</div>
                    <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t('orderSuccess')}</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                        {t('orderThankYou')}
                    </p>
                    <p style={{ color: 'var(--accent-color)', fontSize: '1rem' }}>
                        {t('redirecting')}
                    </p>
                </div>
            </div>
        );
    }

    const shippingCost = 0;
    const tax = (cartTotal * 0.08).toFixed(2);
    const finalTotal = (parseFloat(cartTotal) + parseFloat(tax) + shippingCost).toFixed(2);

    return (
        <div className="container checkout-page">
            <h2 className="section-title">{t('secureCheckout')}</h2>

            {/* Progress Steps */}
            <div className="checkout-steps">
                <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
                    <div className="step-number">1</div>
                    <div className="step-label">{t('cart')}</div>
                </div>
                <div className="step-line"></div>
                <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
                    <div className="step-number">2</div>
                    <div className="step-label">{t('information')}</div>
                </div>
                <div className="step-line"></div>
                <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
                    <div className="step-number">3</div>
                    <div className="step-label">{t('payment')}</div>
                </div>
            </div>

            <div className="checkout-grid">
                {/* Left Column - Forms */}
                <div className="checkout-forms">
                    {/* Cart Review */}
                    {currentStep === 1 && (
                        <div className="glass-card fade-in">
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{t('reviewCart')}</h3>
                            <div className="cart-items-list">
                                {cart.map((item) => (
                                    <div key={item.id} className="cart-item">
                                        <img src={item.image} alt={item.name} className="cart-item-image" />
                                        <div className="cart-item-details">
                                            <h4>{item.name}</h4>
                                            <p className="item-price">${item.price}</p>
                                        </div>
                                        <div className="cart-item-actions">
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                            <button onClick={() => removeFromCart(item.id)} className="remove-btn">×</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="btn-primary" style={{ width: '100%', marginTop: '2rem' }} onClick={() => setCurrentStep(2)}>
                                {t('continueToShipping')}
                            </button>
                        </div>
                    )}

                    {/* Shipping Information */}
                    {currentStep === 2 && (
                        <div className="glass-card fade-in">
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{ t("shippingInformation")}</h3>
                            <form className="checkout-form">
                                <div className="form-section">
                                    <h4>{ t("contactInformation")}</h4>
                                    <div className="form-row">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder={t("emailAddress")}
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-row">
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder={t("phoneNumber")}
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-section">
                                    <h4>{ t("shippingAddress")}</h4>
                                    <div className="form-row two-cols">
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder={t("firstName")}
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder={t("lastName")}
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-row">
                                        <input
                                            type="text"
                                            name="address"
                                            placeholder={t("streetAddress")}
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-row two-cols">
                                        <input
                                            type="text"
                                            name="city"
                                            placeholder={t("city")}
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="state"
                                            placeholder={t("state")}
                                            value={formData.state}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-row two-cols">
                                        <input
                                            type="text"
                                            name="zipCode"
                                            placeholder={t("zipCode")}
                                            value={formData.zipCode}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="country"
                                            placeholder={t("country")}
                                            value={formData.country}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                                    <button type="button" className="btn-secondary" onClick={() => setCurrentStep(1)}>
                                        Back
                                    </button>
                                    <button type="button" className="btn-primary" style={{ flex: 1 }} onClick={() => setCurrentStep(3)}>
                                        Continue to Payment
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Payment Method */}
                    {currentStep === 3 && (
                        <div className="glass-card fade-in">
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{ t("paymentMethod")}</h3>

                            <div className="payment-methods">
                                {/* Apple Pay */}
                                <div
                                    className={`payment-option ${selectedPayment === 'apple' ? 'selected' : ''}`}
                                    onClick={() => setSelectedPayment('apple')}
                                >
                                    <div className="payment-radio">
                                        {selectedPayment === 'apple' && <div className="radio-dot"></div>}
                                    </div>
                                    <div className="payment-icon apple-pay">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M15.5 2c-.8 0-2.1.4-3.1 1.4-.9.9-1.5 2.2-1.3 3.5 1.1.1 2.2-.4 3.1-1.4.9-.9 1.4-2.2 1.3-3.5zm4.4 5.3c-2.4-1.4-5.7-.7-7.2.9-1.5-1.6-3.8-2.3-6.2-.9C4.1 8.7 3 11.2 3 14c0 3.8 2.9 8 6.5 8 1.6 0 2.8-.9 4-.9 1.2 0 2.3.9 4 .9 3.6 0 6.5-4.2 6.5-8 0-2.8-1.1-5.3-3.6-6.7z" />
                                        </svg>
                                    </div>
                                    <div className="payment-label">{ t("applePay")}</div>
                                </div>

                                {/* Google Pay */}
                                <div
                                    className={`payment-option ${selectedPayment === 'google' ? 'selected' : ''}`}
                                    onClick={() => setSelectedPayment('google')}
                                >
                                    <div className="payment-radio">
                                        {selectedPayment === 'google' && <div className="radio-dot"></div>}
                                    </div>
                                    <div className="payment-icon google-pay">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                        </svg>
                                    </div>
                                    <div className="payment-label">{ t("googlePay")}</div>
                                </div>

                                {/* Credit Card */}
                                <div
                                    className={`payment-option ${selectedPayment === 'card' ? 'selected' : ''}`}
                                    onClick={() => setSelectedPayment('card')}
                                >
                                    <div className="payment-radio">
                                        {selectedPayment === 'card' && <div className="radio-dot"></div>}
                                    </div>
                                    <div className="payment-icon credit-card">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                                        </svg>
                                    </div>
                                    <div className="payment-label">{ t("creditCard")}</div>
                                </div>
                            </div>

                            {selectedPayment === 'card' && (
                                <div className="card-form fade-in">
                                    <div className="form-row">
                                        <input type="text" placeholder={t("cardNumber")} />
                                    </div>
                                    <div className="form-row">
                                        <input type="text" placeholder={t("cardholderName")} />
                                    </div>
                                    <div className="form-row two-cols">
                                        <input type="text" placeholder="MM/YY" />
                                        <input type="text" placeholder="CVV" />
                                    </div>
                                </div>
                            )}

                            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                                <button className="btn-secondary" onClick={() => setCurrentStep(2)}>
                                    Back
                                </button>
                                <button className="btn-primary" style={{ flex: 1 }} onClick={handlePlaceOrder}>
                                    Place Order - ${finalTotal}
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Column - Order Summary */}
                <div className="checkout-summary-wrapper">
                    <div className="glass-card checkout-summary sticky-summary">
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>{ t("orderSummary")}</h3>

                        <div className="summary-items">
                            {cart.map((item) => (
                                <div key={item.id} className="summary-item">
                                    <img src={item.image} alt={item.name} />
                                    <div className="summary-item-info">
                                        <p className="summary-item-name">{item.name}</p>
                                        <p className="summary-item-qty">Qty: {item.quantity}</p>
                                    </div>
                                    <p className="summary-item-price">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            ))}
                        </div>

                        <div className="summary-divider"></div>

                        <div className="summary-row">
                            <span>{ t("subtotal")}</span>
                            <span>${cartTotal}</span>
                        </div>
                        <div className="summary-row">
                            <span>{ t("shipping")}</span>
                            <span className="free-shipping">{ t("free")}</span>
                        </div>
                        <div className="summary-row">
                            <span>{ t("tax")}</span>
                            <span>${tax}</span>
                        </div>

                        <div className="summary-divider"></div>

                        <div className="summary-row total">
                            <span>{ t("total")}</span>
                            <span>${finalTotal}</span>
                        </div>

                        <div className="security-badge">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                            </svg>
                            <span>{ t("secureCheckoutBadge")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
