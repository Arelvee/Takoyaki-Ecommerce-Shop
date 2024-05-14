import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { products } from '../data/products';
import { CartContext } from '../context/CartContext';
import baconCheeseImage from '../data/images/bacon-cheese.jpg';
import backgroundImage from '../data/images/menubg.png'; // Import the background image

// Styled Components
const MenuContainer = styled.div`
  padding: 40px 0;
  background-image: url(${backgroundImage}); /* Background image */
  background-size: cover; /* Cover the entire section */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  text-align: center; // Optional
`;

// Grid Layout for Cards
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive columns */
  gap: 20px;
`;

const ProductCard = styled.div`
  /* ... (other styles remain the same) */
  display: flex; /* Enable flexbox for vertical layout */
  flex-direction: column; /* Stack content vertically */
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px; 
  object-fit: cover; 
`;

const CardBody = styled.div`
  padding: 20px;
  flex-grow: 1; /* Allow CardBody to take up remaining space */
`;

const CardFooter = styled.div`
  display: flex; /* Enable flexbox for horizontal layout */
  justify-content: space-between; /* Align items with space between */
  align-items: center; /* Vertically align items */
  padding: 20px;
`;

const ProductTitle = styled.h5`
  font-weight: 600;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  margin-bottom: 15px;
`;

const AddToCartButton = styled.button`
  background-color: #419001; /* Vibrant orange */
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff5500; /* Slightly darker on hover */
  }
`;

const Notification = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 999;
`;

const Menu = () => {
  const { addToCart } = useContext(CartContext);
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = (product) => {
    const itemToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      // Add any other necessary details here
    };
    addToCart(itemToAdd); // Pass the item details to the addToCart function
    setShowNotification(true); // Show the notification
    setTimeout(() => setShowNotification(false), 2000); // Hide the notification after 2 seconds
  };

  return (
    <MenuContainer>
      <div className="container">
        {showNotification && <Notification>Item added to cart</Notification>}
        <ProductGrid>
          {products.map(product => (
            <ProductCard key={product.id}>
              {/* Corrected Image Path */}
              <ProductImage src={baconCheeseImage} alt={product.name} />

              <CardBody>
                <ProductTitle>{product.name}</ProductTitle>
                <p className="card-text">{product.description}</p>
              </CardBody>

              <CardFooter>
                <ProductPrice>₱{product.price.toFixed(2)}</ProductPrice> {/* Format Price */}
                <AddToCartButton onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </AddToCartButton>
              </CardFooter>
            </ProductCard>
          ))}
        </ProductGrid>
      </div>
    </MenuContainer>
  );
};

export default Menu;
