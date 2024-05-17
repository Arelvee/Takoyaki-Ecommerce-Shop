import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import backgroundImage from '../data/images/menubg.png'; // Import the background image

const PaymentContainer = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-image: url(${backgroundImage}); /* Background image */
  background-size: cover; /* Cover the entire section */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  text-align: center; // Optional
`;

const PaymentOptionsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

const PaymentOptionIcon = styled.img`
  width: 40px;
  margin-right: 15px;
`;

const PaymentOptionLabel = styled.span`
  font-size: 1.1rem;
  color: #333;
`;

const PaymentFormContainer = styled.div`
  flex: 1;
  padding-left: 40px;
`;

const PaymentForm = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 1rem;
  color: #333;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const FormButton = styled.button`
  padding: 12px 20px;
  background-color: ${({ loading }) => (loading ? '#ccc' : '#FF6347')};
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: ${({ loading }) => (loading ? 'not-allowed' : 'pointer')};
`;

const TotalAmount = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-top: 20px;
`;

const Payment = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [name, setName] = useState('');
  const [gcashNumber, setGcashNumber] = useState('');
  const [mayaNumber, setMayaNumber] = useState('');

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate Payment Processing (Replace with actual payment gateway logic)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Handle Success (Replace with your success logic)
      clearCart();
      navigate('/order-confirmation'); // Redirect to confirmation page
    } catch (error) {
      // Handle Errors (Replace with your error handling logic)
      console.error('Error processing payment:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PaymentContainer>
      <PaymentOptionsContainer>
        <PaymentOption onClick={() => handlePaymentSelection('credit_card')}>
          <PaymentOptionIcon src="/icons/credit_card_icon.jpg" alt="Credit Card" />
          <PaymentOptionLabel>Credit/Debit Card</PaymentOptionLabel>
        </PaymentOption>
        <PaymentOption onClick={() => handlePaymentSelection('gcash')}>
          <PaymentOptionIcon src="/icons/gcash_icon.png" alt="GCash" />
          <PaymentOptionLabel>GCash</PaymentOptionLabel>
        </PaymentOption>
        <PaymentOption onClick={() => handlePaymentSelection('maya')}>
          <PaymentOptionIcon src="/icons/maya_icon.png" alt="Maya" />
          <PaymentOptionLabel>Maya</PaymentOptionLabel>
        </PaymentOption>
        <PaymentOption onClick={() => handlePaymentSelection('cash_on_delivery')}>
          <PaymentOptionIcon src="/icons/cod_icon.jpg" alt="Cash on Delivery" />
          <PaymentOptionLabel>Cash on Delivery</PaymentOptionLabel>
        </PaymentOption>
      </PaymentOptionsContainer>

      {selectedPayment === 'credit_card' && (
        <PaymentFormContainer>
          <PaymentForm onSubmit={handleSubmit}>
            <FormLabel htmlFor="cardNumber">Card Number</FormLabel>
            <FormInput
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
            <FormLabel htmlFor="expiryDate">Expiry Date</FormLabel>
            <FormInput
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
            <FormLabel htmlFor="cvv">CVV</FormLabel>
            <FormInput type="text" id="cvv" value={cvv} onChange={(e) => setCVV(e.target.value)} required />
            <FormLabel htmlFor="name">Name on Card</FormLabel>
            <FormInput type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            <TotalAmount>Total Amount: ₱{totalAmount.toFixed(2)}</TotalAmount>
            <FormButton type="submit" loading={loading} disabled={loading}>
              {loading ? 'Processing...' : 'Pay Now'}
            </FormButton>
          </PaymentForm>
        </PaymentFormContainer>
      )}

      {selectedPayment === 'gcash' && (
        <PaymentFormContainer>
          <PaymentForm onSubmit={handleSubmit}>
            <FormLabel htmlFor="gcashNumber">GCash Number</FormLabel>
            <FormInput
              type="text"
              id="gcashNumber"
              value={gcashNumber}
              onChange={(e) => setGcashNumber(e.target.value)}
              required
            />
            <TotalAmount>Total Amount: ₱{totalAmount.toFixed(2)}</TotalAmount>
            <FormButton type="submit" loading={loading} disabled={loading}>
              {loading ? 'Processing...' : 'Pay Now'}
            </FormButton>
          </PaymentForm>
        </PaymentFormContainer>
      )}

      {selectedPayment === 'maya' && (
        <PaymentFormContainer>
          <PaymentForm onSubmit={handleSubmit}>
            <FormLabel htmlFor="mayaNumber">Maya Number</FormLabel>
            <FormInput
              type="text"
              id="mayaNumber"
              value={mayaNumber}
              onChange={(e) => setMayaNumber(e.target.value)}
              required
            />
            <TotalAmount>Total Amount: ₱{totalAmount.toFixed(2)}</TotalAmount>
            <FormButton type="submit" loading={loading} disabled={loading}>
              {loading ? 'Processing...' : 'Pay Now'}
            </FormButton>
          </PaymentForm>
        </PaymentFormContainer>
      )}
    </PaymentContainer>
  );
};

export default Payment;
