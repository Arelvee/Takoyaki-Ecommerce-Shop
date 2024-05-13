import React, { useContext } from 'react';
import styled from 'styled-components';
import { products } from '../data/products';
import { CartContext } from '../context/CartContext';



// Styled Components
const MenuContainer = styled.div`
  padding: 40px 0; 
  background-color: #f8f8f8;
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

const Menu = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    const itemToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      // Add any other necessary details here
    };
    addToCart(itemToAdd); // Pass the item details to the addToCart function
  };


  return (
    <MenuContainer>
      <div className="container">
        <ProductGrid>
          {products.map(product => (
            <ProductCard key={product.id}>
              <ProductImage src={product.image} alt={product.name} />
              <CardBody>
                <ProductTitle>{product.name}</ProductTitle>
                <p className="card-text">{product.description}</p>
              </CardBody>
              <CardFooter>
                <ProductPrice>${product.price}</ProductPrice>
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