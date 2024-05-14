// components/CartItem.js

import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 150px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const CardBody = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h5`
  font-size: 1.2rem;
  margin: 0 0 10px;
  color: #333;
`;

const Text = styled.p`
  margin: 0 0 10px;
  color: #666;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background-color: #ddd;
  border: none;
  padding: 10px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ccc;
  }
`;

const RemoveButton = styled(Button)`
  background-color: #f44336;
  color: white;
  margin-left: auto;

  &:hover {
    background-color: #e53935;
  }
`;

const CartItem = ({ item, onIncreaseQuantity, onDecreaseQuantity, onRemoveItem }) => {
  return (
    <Card>
      <ImageContainer>
        <Image src={item.image} alt={item.name} />
      </ImageContainer>
      <CardBody>
        <div>
          <Title>{item.name}</Title>
          <Text>Quantity: {item.quantity}</Text>
          <Text>Price: ₱{item.price.toFixed(2)}</Text> {/* Change currency symbol here */}
        </div>
        <ButtonGroup>
          <Button onClick={onDecreaseQuantity}> - </Button>
          <Button onClick={onIncreaseQuantity}> + </Button>
          <RemoveButton onClick={onRemoveItem}> Remove </RemoveButton>
        </ButtonGroup>
      </CardBody>
    </Card>
  );
};

export default CartItem;
