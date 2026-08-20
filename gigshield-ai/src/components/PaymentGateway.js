import React, { useState } from 'react';

const PaymentGateway = ({ plan, onPaymentSuccess, onCancel }) => {
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [upiId, setUpiId] = useState('');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    email: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    postalCode: ''
  });

  const handleUPIPayment = () => {
    if (!upiId) {
      alert('Please enter UPI ID or mobile number');
      return;
    }
    alert(`Processing UPI payment of ₹${plan.premium}...`);
    setTimeout(() => {
      alert('Payment Successful!');
      onPaymentSuccess();
    }, 2000);
  };

  const handleCardPayment = () => {
    if (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvc || !cardDetails.name) {
      alert('Please fill all card details');
      return;
    }
    alert(`Processing card payment of ₹${plan.premium}...`);
    setTimeout(() => {
      alert('Payment Successful!');
      onPaymentSuccess();
    }, 2000);
  };

  return (
    <div className="payment-gateway-overlay">
      <div className="payment-gateway-modal">
        <div className="payment-methods-tabs">
          <button 
            className={`payment-tab ${paymentMethod === 'upi' ? 'active' : ''}`}
            onClick={() => setPaymentMethod('upi')}
          >
            <i className="fas fa-mobile-alt"></i> UPI / QR
          </button>
          <button 
            className={`payment-tab ${paymentMethod === 'card' ? 'active' : ''}`}
            onClick={() => setPaymentMethod('card')}
          >
            <i className="fas fa-credit-card"></i> Credit / Debit Card
          </button>
        </div>

        {paymentMethod === 'upi' && (
          <div className="upi-payment-section">
            <h3><i className="fas fa-qrcode"></i> Pay through UPI QR Code</h3>
            <p className="scan-text">Scan and Pay</p>
            
            <div className="qr-code-container">
              <div className="qr-code-box">
                <div className="qr-code-simulated">
                  <i className="fas fa-qrcode" style={{ fontSize: '120px', color: '#000' }}></i>
                </div>
                <p className="scan-instruction">Scan the QR code using any UPI app on your phone</p>
              </div>
            </div>

            <div className="upi-id-section">
              <label>Enter UPI ID / Mobile No</label>
              <input 
                type="text" 
                className="upi-input"
                placeholder="example@upi or mobile number"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
              <button className="verify-vpa-btn">Verify VPA</button>
            </div>

            <div className="payment-agreement">
              <input type="checkbox" id="agreeTerms" />
              <label htmlFor="agreeTerms">I agree with the Privacy Policy by proceeding with this payment.</label>
            </div>

            <div className="payment-amount-display">
              <strong>INR {plan.premium} (Total Amount Payable)</strong>
            </div>

            <div className="payment-actions">
              <button className="make-payment-btn" onClick={handleUPIPayment}>
                <i className="fas fa-rupee-sign"></i> Make Payment
              </button>
              <button className="cancel-payment-btn" onClick={onCancel}>
                Cancel
              </button>
            </div>
          </div>
        )}

        {paymentMethod === 'card' && (
          <div className="card-payment-section">
            <div className="stripe-header">
              <i className="fab fa-stripe"></i> Stripe
              <span className="badge">Secure</span>
            </div>

            <div className="price-summary">
              <h4>Templates</h4>
              <div className="plan-detail">
                <span>{plan.name} Plan</span>
                <span>₹{plan.premium} / month</span>
              </div>
              <div className="price-breakdown">
                <div className="price-row">
                  <span>Platform basic</span>
                  <span>₹{plan.premium}</span>
                </div>
                <div className="price-row">
                  <span>Subtotal</span>
                  <span>₹{plan.premium}</span>
                </div>
                <div className="price-row">
                  <span>Tax</span>
                  <span>₹0.00</span>
                </div>
                <div className="price-row total">
                  <span><strong>Total due today</strong></span>
                  <span><strong>₹{plan.premium}</strong></span>
                </div>
              </div>
            </div>

            <div className="card-form">
              <div className="form-group">
                <label>Contact Information</label>
                <input 
                  type="email" 
                  className="form-input"
                  placeholder="Email"
                  value={cardDetails.email}
                  onChange={(e) => setCardDetails({...cardDetails, email: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Payment Method</label>
                <div className="card-input-group">
                  <input 
                    type="text" 
                    className="form-input card-number"
                    placeholder="Card number"
                    value={cardDetails.number}
                    onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                  />
                  <div className="card-details-row">
                    <input 
                      type="text" 
                      className="form-input small"
                      placeholder="MM / YY"
                      value={cardDetails.expiry}
                      onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                    />
                    <input 
                      type="text" 
                      className="form-input small"
                      placeholder="CVC"
                      value={cardDetails.cvc}
                      onChange={(e) => setCardDetails({...cardDetails, cvc: e.target.value})}
                    />
                  </div>
                  <input 
                    type="text" 
                    className="form-input"
                    placeholder="Cardholder name"
                    value={cardDetails.name}
                    onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Billing Address</label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="Address line 1"
                  value={cardDetails.address}
                  onChange={(e) => setCardDetails({...cardDetails, address: e.target.value})}
                />
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="Address line 2 (Optional)"
                  value={cardDetails.address2}
                  onChange={(e) => setCardDetails({...cardDetails, address2: e.target.value})}
                />
                <div className="address-row">
                  <input 
                    type="text" 
                    className="form-input"
                    placeholder="State"
                    value={cardDetails.state}
                    onChange={(e) => setCardDetails({...cardDetails, state: e.target.value})}
                  />
                  <input 
                    type="text" 
                    className="form-input"
                    placeholder="City"
                    value={cardDetails.city}
                    onChange={(e) => setCardDetails({...cardDetails, city: e.target.value})}
                  />
                  <input 
                    type="text" 
                    className="form-input small"
                    placeholder="Postal code"
                    value={cardDetails.postalCode}
                    onChange={(e) => setCardDetails({...cardDetails, postalCode: e.target.value})}
                  />
                </div>
              </div>

              <div className="payment-actions">
                <button className="submit-payment-btn" onClick={handleCardPayment}>
                  <i className="fas fa-lock"></i> Pay ₹{plan.premium}
                </button>
                <button className="cancel-payment-btn" onClick={onCancel}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentGateway;