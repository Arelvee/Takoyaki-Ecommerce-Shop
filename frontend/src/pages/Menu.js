import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
import backgroundImage from '../data/images/menubg.png';

// Styled Components
const MenuContainer = styled.div`
  padding: 40px 0;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
`;

// Grid Layout for Cards
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
 
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add box-shadow */
  border-radius: 10px; /* Add border-radius */
  background-color: #ffffff; /* Add background-color */
  transition: transform 0.2s ease, box-shadow 0.2s ease; /* Add transition for hover effect */

  &:hover {
    transform: translateY(-5px); /* Add slight translateY on hover */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Enhance box-shadow on hover */
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px; 
  object-fit: cover; 
`;

const CardBody = styled.div`
  padding: 20px;
  flex-grow: 1;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  background-color: #013590;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff5500;
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
  const [products, setProducts] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/products');
      console.log('Fetched products:', response.data); // Log the fetched products
      setProducts(response.data.products); // Update state with the products array
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    const itemToAdd = {
      id: product._id, // Use _id as the id
      name: product.name,
      price: product.price,
      image: product.image,
    };
    addToCart(itemToAdd);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  console.log('Products state:', products); // Log the products state to check its structure

  return (
    <MenuContainer>
      <div className="container">
        {showNotification && <Notification>Item added to cart</Notification>}
        <ProductGrid>
          {Array.isArray(products) && products.map(product => (
            <ProductCard key={product._id}>
              <ProductImage src={product.image} alt={product.name} />

              <CardBody>
                <ProductTitle>{product.name}</ProductTitle>
                <p className="card-text">{product.description}</p>
              </CardBody>

              <CardFooter>
                <ProductPrice>₱{product.price.toFixed(2)}</ProductPrice>
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