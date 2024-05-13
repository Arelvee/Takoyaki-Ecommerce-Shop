import React from 'react';
import styled from 'styled-components'; 

const FooterContainer = styled.footer`
  background-color: #f0f0f0;
  padding: 20px 0;
  text-align: center;
  font-family: 'Montserrat', sans-serif; 
`;

const CopyrightText = styled.span`
  color: #333;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <CopyrightText>© 2024 Takoyamie-Hauz Online Order. All rights reserved.</CopyrightText>
      </div>
    </FooterContainer>
  );
}

export default Footer;
