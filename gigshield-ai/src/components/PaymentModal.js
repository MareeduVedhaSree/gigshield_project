import React, { useState } from 'react';

const PaymentModal = ({ isOpen, onClose, onSuccess, amount }) => {
  const [paymentMethod, setPaymentMethod] = useState('upi');

  if (!isOpen) return null;

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      onSuccess(amount);
      onClose();
    }, 1500);
  };

  return (
    <div className="payment-overlay">
      <div className="payment-modal">
        <div className="payment-cards">
          <div 
            className={`payment-card ${paymentMethod === 'upi' ? 'active' : ''}`}
            onClick={() => setPaymentMethod('upi')}
          >
            <div className="payment-card-icon">📱</div>
            <div className="payment-card-title">UPI / QR</div>
            <div className="payment-card-subtitle">Scan & Pay</div>
          </div>
          <div 
            className={`payment-card ${paymentMethod === 'card' ? 'active' : ''}`}
            onClick={() => setPaymentMethod('card')}
          >
            <div className="payment-card-icon">💳</div>
            <div className="payment-card-title">Credit / Debit Card</div>
            <div className="payment-card-subtitle">Secure Payment</div>
          </div>
        </div>

        {paymentMethod === 'upi' && (
          <div className="upi-container">
            <div className="qr-rectangle">
              <div className="qr-code-rect"></div>
              <div className="company-name-rect">GIGSHIELD AI PRIVATE LIMITED</div>
              <div className="scan-text">Scan with any UPI app</div>
            </div>
            <div className="payment-status-rect">
              Decoding payment status: <span>₹{amount}</span>
            </div>
            <div className="options-rect">
              <div className="option-row">
                <span className="check-mark">✓</span>
                <span>Google Pay, PhonePe, Paytm, UPI & NEFT</span>
              </div>
              <div className="option-row">
                <span className="check-mark">✓</span>
                <span>Visa, Mastercard, RuPay & more</span>
              </div>
            </div>
            <button className="pay-btn-rect" onClick={handlePayment}>
              Pay Now
            </button>
          </div>
        )}

        {paymentMethod === 'card' && (
          <div className="card-container">
            <div className="card-rectangle">
              <div className="logo-rect">GigShield AI</div>
              <div className="invoice-link-rect">
                <i className="fas fa-download"></i> Download invoice
              </div>
              <div className="order-rect">
                <div className="order-item-rect">
                  <div>
                    <div className="item-name-rect">Insurance Premium</div>
                    <div className="item-size-rect">Monthly Plan</div>
                  </div>
                  <div className="price-rect">₹{amount}</div>
                </div>
                <div className="total-rect">
                  <span>Total</span>
                  <span>₹{amount}</span>
                </div>
              </div>
              <div className="card-form-rect">
                <div className="form-label-rect">Cardholder's Name</div>
                <input type="text" className="input-rect" placeholder="John Doe" />
                <div className="form-label-rect">Card Number</div>
                <input type="text" className="input-rect" placeholder="1234 5678 9012 3456" />
                <div className="card-row-rect">
                  <div style={{ flex: 1 }}>
                    <div className="form-label-rect">Expiry</div>
                    <input type="text" className="input-rect" placeholder="MM/YY" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="form-label-rect">CVV</div>
                    <input type="text" className="input-rect" placeholder="123" />
                  </div>
                </div>
                <div className="checkbox-rect">
                  <input type="checkbox" id="rememberCard" />
                  <label htmlFor="rememberCard">Remember this card</label>
                </div>
                <button className="pay-btn-rect" onClick={handlePayment}>
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;