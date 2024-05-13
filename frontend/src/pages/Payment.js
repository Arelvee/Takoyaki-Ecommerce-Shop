import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const PaymentContainer = styled.div`
  padding: 80px 0;
  text-align: center;
`;

const PaymentTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
`;

const PaymentForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ loading }) => loading ? '#ccc' : '#FF6347'};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: ${({ loading }) => loading ? 'not-allowed' : 'pointer'};
`;

const Payment = () => {
    const { cartItems, clearCart } = useContext(CartContext);
    const navigate = useNavigate();
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCVV] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // 1. Simulate Payment Processing (Replace with actual payment gateway logic)
            const response = await fetch('/api/payment', {
                method: 'POST',
                body: JSON.stringify({
                    cardNumber, expiryDate, cvv, name, amount: totalAmount
                }),
                headers: { 'Content-Type': 'application/json' }
            });

            if (!response.ok) {
                throw new Error('Payment failed');
            }

            // 2. Handle Success (Replace with your success logic)
            clearCart();
            navigate('/order-confirmation'); // Redirect to confirmation page

        } catch (error) {
            // 3. Handle Errors (Replace with your error handling logic)
            console.error('Error processing payment:', error);
            alert('Payment failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <PaymentContainer>
            <PaymentTitle>Payment</PaymentTitle>
            <PaymentForm onSubmit={handleSubmit}>
                <div>
                    <FormLabel htmlFor="cardNumber">Card Number</FormLabel>
                    <FormInput type="text" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
                </div>
                <div>
                    <FormLabel htmlFor="expiryDate">Expiry Date</FormLabel>
                    <FormInput type="text" id="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
                </div>
                <div>
                    <FormLabel htmlFor="cvv">CVV</FormLabel>
                    <FormInput type="text" id="cvv" value={cvv} onChange={(e) => setCVV(e.target.value)} required />
                </div>
                <div>
                    <FormLabel htmlFor="name">Name on Card</FormLabel>
                    <FormInput type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <p>Total Amount: ${totalAmount.toFixed(2)}</p>
                </div>
                <FormButton type="submit" loading={loading} disabled={loading}>{loading ? 'Processing...' : 'Pay Now'}</FormButton>
            </PaymentForm>
        </PaymentContainer>
    );
}

export default Payment;
