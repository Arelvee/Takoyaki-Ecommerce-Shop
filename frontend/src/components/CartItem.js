import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

const Card = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 150px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
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
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }

  @media (max-width: 991px) {
    width: 40px;
    padding: 5px;
    font-size: 14px;
  }
`;

const RemoveButton = styled(Button)`
  background-color: #f44336;

  &:hover {
    background-color: #e53935;
  }

  @media (max-width: 991px) {
    width: 80%;
    margin-top: 10px;
  }
`;

const IncreaseIcon = <FontAwesomeIcon icon={faPlus} />;
const DecreaseIcon = <FontAwesomeIcon icon={faMinus} />;
const RemoveIcon = <FontAwesomeIcon icon={faTrash} />;

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
          <Text>Price: ₱{item.price.toFixed(2)}</Text>
        </div>
        <ButtonGroup>
          <Button onClick={onDecreaseQuantity}>{DecreaseIcon}</Button>
          <Button onClick={onIncreaseQuantity}>{IncreaseIcon}</Button>
          <RemoveButton onClick={onRemoveItem}>{RemoveIcon} Remove</RemoveButton>
        </ButtonGroup>
      </CardBody>
    </Card>
  );
};

export default CartItem;
