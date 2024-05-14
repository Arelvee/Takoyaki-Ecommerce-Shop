import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUtensils,
  faShoppingCart,
  faCreditCard,
  faEnvelope,
  faPhone,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const NavContainer = styled.nav`
  background: linear-gradient(135deg, #e1efee, #f3f0e8);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px 20px; /* Adjusted padding */
  }
`;

const BrandLink = styled(Link)`
  font-family: "Raleway", sans-serif;
  font-size: 28px;
  color: #222;
  text-decoration: none;
  font-weight: 400;
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 80px;
  margin-right: 10px;
  border-radius: 50%;
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 20px; /* Adjusted margin */
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")}; /* Toggle display based on isOpen */
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

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle the previous state of isMenuOpen
  };

  return (
    <NavContainer>
      <BrandLink to="/">
        <LogoImage src={Logo} alt="Logo" />
        Takoyamie-Hauz
      </BrandLink>
      <HamburgerIcon onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </HamburgerIcon>
      <NavLinksContainer isOpen={isMenuOpen}> {/* Pass isOpen prop to toggle visibility */}
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
  );
};

export default Header;
