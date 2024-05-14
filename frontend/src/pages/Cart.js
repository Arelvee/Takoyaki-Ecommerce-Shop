// components/Cart.js

import React, { useContext } from 'react';
import CartItem from '../components/CartItem';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';

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
  justify-content: center;
`;

const TotalContainer = styled.div`
  margin-top: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: right;
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

  &:hover {
    background-color: #036b1a;
  }
`;

const Cart = () => {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart } = useContext(CartContext);

  const calculateTotalBill = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <CartContainer>
      <div className="container">
        <CartHeading>Your Cart</CartHeading>
        {cartItems.length === 0 ? (
          <EmptyCartMessage>Your cart is empty.</EmptyCartMessage>
        ) : (
          <>
            <CartItemsContainer>
              {cartItems.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncreaseQuantity={() => addToCart(item)}
                  onDecreaseQuantity={() => decreaseQuantity(item.id)}
                  onRemoveItem={() => removeFromCart(item.id)}
                />
              ))}
            </CartItemsContainer>
            <TotalContainer>
              Total: ₱{calculateTotalBill()} {/* Change currency symbol here */}
            </TotalContainer>
            <div className="text-center">
              <ProceedButton>Proceed to Checkout</ProceedButton>
            </div>
          </>
        )}
      </div>
    </CartContainer>
  );
};

export default Cart;
