import React, { useContext } from 'react';
import CartItem from '../components/CartItem';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';

// Styled components
const CartContainer = styled.div`
  padding: 40px 0;
`;

const CartHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
`;

const EmptyCartMessage = styled.p`
  font-size: 1.2rem;
  color: #666;
  text-align: center;
`;

const CartItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const ProceedButton = styled.button`
  margin-top: 30px;
  padding: 15px 40px;
  font-size: 1.2rem;
  background-color: #048820;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <CartContainer>
      <div className="container">
        <CartHeading>Your Cart</CartHeading>
        {cartItems.length === 0 ? (
          <EmptyCartMessage>Your cart is empty.</EmptyCartMessage>
        ) : (
          <CartItemsContainer>
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </CartItemsContainer>
        )}
        {cartItems.length > 0 && (
          <div className="text-center">
            <ProceedButton>Proceed to Checkout</ProceedButton>
          </div>
        )}
      </div>
    </CartContainer>
  );
};

export default Cart;