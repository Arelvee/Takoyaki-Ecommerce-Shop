import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/logo.jpg"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, faUtensils, faShoppingCart, 
  faCreditCard, faEnvelope, faPhone, faBars 
} from '@fortawesome/free-solid-svg-icons';

const NavContainer = styled.nav`
  background-color: transparent; /* Transparent background */
  padding: 20px 0;
  display: flex;
  justify-content: space-between; /* Align items to the ends */
`;

const BrandLink = styled(Link)`
  font-family: "Raleway", sans-serif; /* Elegant sans-serif font */
  font-size: 28px;
  color: #222;
  text-decoration: none;
  font-weight: 400; /* Bold font weight */
  display: flex;
  align-items: center; /* Align items vertically */
`;

const LogoImage = styled.img`
  width: 80px; /* Set width of the logo */
  margin-right: 10px;
  margin-left: 20px; /* Add spacing between logo and brand link */
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) { 
    flex-direction: column;   
    position: absolute;
    top: 100%;              
    left: 0;
    background-color: white;
    width: 100%;
    padding: 20px;
    transform: translateY(-100%); 
    transition: transform 0.3s ease-in-out; 

    &.active {
      transform: translateY(0); 
    }
  }
`;

const NavLink = styled(Link)`
  color: #222;
  margin: 0 15px; 
  text-decoration: none;
  font-weight: 500; 
  font-size: 20px;  
  transition: color 0.2s;
  display: flex;             
  align-items: center;      

  &:hover {
    color: #ff6600;
  }

  @media (max-width: 768px) {
    display: block;         
    margin: 10px 0;         
  }
`;

const NavLinkText = styled.span`  
  margin-left: 5px;         
`;

const HamburgerIcon = styled.button`
  display: none; 
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 20px; 

  @media (max-width: 768px) {
    display: block;
  }
`;


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <NavContainer>
        <BrandLink to="/">
          <LogoImage src={Logo} alt="Logo" />
          Takoyamie-Hauz
        </BrandLink>
        <HamburgerIcon onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </HamburgerIcon>
        <NavLinksContainer ref={menuRef} className={isMenuOpen ? "active" : ""}>
          <NavLink to="/">
            <FontAwesomeIcon icon={faHome} />
            <NavLinkText>Home</NavLinkText>
          </NavLink>
          <NavLink to="/menu">
            <FontAwesomeIcon icon={faUtensils} />
            <NavLinkText>Menu</NavLinkText>
          </NavLink>
          <NavLink to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <NavLinkText>Cart</NavLinkText>
          </NavLink>
          <NavLink to="/payment">
            <FontAwesomeIcon icon={faCreditCard} />
            <NavLinkText>Payment</NavLinkText>
          </NavLink>
          <NavLink to="/contact">
            <FontAwesomeIcon icon={faEnvelope} />
            <NavLinkText>Contact</NavLinkText>
          </NavLink>
          <NavLink to="/call"> 
            <FontAwesomeIcon icon={faPhone} />
            <NavLinkText>Call</NavLinkText>
          </NavLink> 
        </NavLinksContainer>
      </NavContainer>
    </header>
  );
};

export default Header;