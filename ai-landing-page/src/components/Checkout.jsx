import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const planData = location.state || {
    plan: "PRO",
    billingCycle: "1 Month(s)",
    durationMonths: 1,
    price: 29,
  };

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      alert(`🎉 Payment Successful for ${planData.plan} Plan!`);
      
      // Automatic Redirect to Landing Page
      navigate("/");
    }, 1500);
  };

  return (
    <div className="pro-checkout-wrapper">
      <div className="pro-checkout-container">
        
        {/* Top Header with Brand Logo & Security Tag */}
        <div className="pro-checkout-header">
  <div className="brand-logo-container">
    <Link to="/" className="checkout-brand-logo">
      <div className="logo-icon">✦</div>
      <span>IX AI Chatbot</span>
    </Link>
  </div>
          <div className="header-actions">
            
           
          </div>
        </div>

        <div className="pro-checkout-grid">
          
          {/* Main Billing Form Area */}
          <div className="pro-form-card">
            <div className="form-section-title">
              <h2>Billing & Payment Details</h2>
              <p>Complete your purchase to unlock instant access</p>
            </div>

            <form onSubmit={handleSubmit} className="pro-checkout-form">
              {/* Customer Info */}
              <div className="form-sub-section">
                <h3 className="section-label">Customer Information</h3>
                <div className="form-row">
                  <div className="input-field">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="John"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-field">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Doe"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-field">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-field">
                    <label>Company (Optional)</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="form-sub-section">
                <h3 className="section-label">Select Payment Method</h3>
                
                <div className="payment-tabs">
                  <div
                    className={`payment-tab ${paymentMethod === "card" ? "active" : ""}`}
                    onClick={() => setPaymentMethod("card")}
                  >
                    <input
                      type="radio"
                      name="payment_choice"
                      checked={paymentMethod === "card"}
                      readOnly
                    />
                    <div className="tab-info">
                      <span className="tab-title">Credit / Debit Card</span>
                      <span className="card-icons">💳 Visa / Mastercard</span>
                    </div>
                  </div>

                  <div
                    className={`payment-tab ${paymentMethod === "paypal" ? "active" : ""}`}
                    onClick={() => setPaymentMethod("paypal")}
                  >
                    <input
                      type="radio"
                      name="payment_choice"
                      checked={paymentMethod === "paypal"}
                      readOnly
                    />
                    <div className="tab-info">
                      <span className="tab-title">PayPal</span>
                      <span className="paypal-sub">Fast & Secure</span>
                    </div>
                  </div>
                </div>

                {/* Card Fields */}
                {paymentMethod === "card" ? (
                  <div className="card-input-box">
                    <div className="input-field">
                      <label>Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="1234  5678  9101  1121"
                        maxLength="19"
                        required
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="form-row">
                      <div className="input-field">
                        <label>Expiration Date</label>
                        <input
                          type="text"
                          name="expiry"
                          placeholder="MM / YY"
                          maxLength="5"
                          required
                          value={formData.expiry}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="input-field">
                        <label>CVV / CVC</label>
                        <input
                          type="password"
                          name="cvv"
                          placeholder="123"
                          maxLength="4"
                          required
                          value={formData.cvv}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="paypal-banner">
                    <p>After clicking <strong>Pay Now</strong>, you will be redirected to PayPal to complete your purchase securely.</p>
                  </div>
                )}
              </div>

              {/* Pay Button */}
              <button
                type="submit"
                className="submit-payment-btn"
                disabled={isProcessing}
              >
                {isProcessing ? "Processing Payment..." : `Pay $${planData.price}`}
              </button>
            </form>
          </div>

          {/* Sidebar Order Summary */}
          <div className="pro-summary-sidebar">
            <div className="summary-card">
              <h3 className="summary-title">Order Summary</h3>

              <div className="plan-badge-row">
                <div>
                  <span className="selected-plan-name">{planData.plan} PLAN</span>
                  <span className="selected-plan-cycle">({planData.billingCycle})</span>
                </div>
                <span className="plan-price-tag">${planData.price}</span>
              </div>

              <div className="summary-breakdown">
                <div className="breakdown-row">
                  <span>Base Price</span>
                  <span>${planData.price}</span>
                </div>
                <div className="breakdown-row">
                  <span>Tax & Fees</span>
                  <span>$0.00</span>
                </div>
              </div>

              <div className="summary-divider" />

              <div className="total-due-row">
                <span>Total Due</span>
                <span className="final-amount">${planData.price}</span>
              </div>

              <div className="guarantee-box">
                <div className="guarantee-icon">🛡️</div>
                <div>
                  <h4>14-Day Money Back Guarantee</h4>
                  <p>No questions asked. Cancel anytime from your profile.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;