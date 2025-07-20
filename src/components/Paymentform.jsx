// PaymentComponent.jsx
import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './PaymentComponent.css'; // Custom CSS for additional styling

const PaymentComponent = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paypalEmail, setPaypalEmail] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [address, setAddress] = useState('');

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission logic here
    alert('Payment processed!');
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title">Order Summary</h4>
              <p className="card-text">
                <strong>Book Title:</strong>ihiuhiu<br />
                <strong>Author:</strong> John Doe<br />
                <strong>Price:</strong> 67<br />
            
              </p>
            </div>
          </div>
          
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title">Delivery Details</h4>
              <div className="form-group">
                <label htmlFor="address">Delivery Address:</label>
                <textarea
                  id="address"
                  className="form-control"
                  rows="3"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title">Payment Methods</h4>
              <div className="form-group">
                <label className="form-check-label">Select Payment Method:</label>
                <div className="form-check">
                  <input
                    type="radio"
                    id="credit-card"
                    name="paymentMethod"
                    value="credit-card"
                    className="form-check-input"
                    checked={paymentMethod === 'credit-card'}
                    onChange={handlePaymentMethodChange}
                  />
                  <label htmlFor="credit-card" className="form-check-label">Credit Card</label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    id="paypal"
                    name="paymentMethod"
                    value="paypal"
                    className="form-check-input"
                    checked={paymentMethod === 'paypal'}
                    onChange={handlePaymentMethodChange}
                  />
                  <label htmlFor="paypal" className="form-check-label">PayPal</label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    id="bank-transfer"
                    name="paymentMethod"
                    value="bank-transfer"
                    className="form-check-input"
                    checked={paymentMethod === 'bank-transfer'}
                    onChange={handlePaymentMethodChange}
                  />
                  <label htmlFor="bank-transfer" className="form-check-label">Bank Transfer</label>
                </div>
              </div>

              {paymentMethod === 'credit-card' && (
                <div className="credit-card-info">
                  <div className="form-group">
                    <label htmlFor="card-number">Card Number:</label>
                    <input
                      type="text"
                      id="card-number"
                      className="form-control"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="expiry-date">Expiry Date:</label>
                        <input
                          type="text"
                          id="expiry-date"
                          className="form-control"
                          value={expiryDate}
                          onChange={(e) => setExpiryDate(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="cvv">CVV:</label>
                        <input
                          type="text"
                          id="cvv"
                          className="form-control"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'paypal' && (
                <div className="paypal-info">
                  <div className="form-group">
                    <label htmlFor="paypal-email">PayPal Email:</label>
                    <input
                      type="email"
                      id="paypal-email"
                      className="form-control"
                      value={paypalEmail}
                      onChange={(e) => setPaypalEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}

              {paymentMethod === 'bank-transfer' && (
                <div className="bank-info">
                  <div className="form-group">
                    <label htmlFor="bank-account">Bank Account Number:</label>
                    <input
                      type="text"
                      id="bank-account"
                      className="form-control"
                      value={bankAccount}
                      onChange={(e) => setBankAccount(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}

              <button type="submit" className="btn btn-primary btn-block mt-3">Place Order</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title">Order Summary</h4>
              <p className="card-text">
                <strong>Total Amount:</strong> $20.00
              </p>
              <button type="button" className="btn btn-secondary btn-block">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentComponent;
