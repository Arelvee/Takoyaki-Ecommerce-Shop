import React from 'react';
import styled from 'styled-components'; 

const FooterContainer = styled.footer`
background: linear-gradient(135deg, #E1EFEE, #F3F0E8); /* Subtle gradient background */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
padding: 20px 30px; /* Adjust padding */
display: flex;
justify-content: space-between;
align-items: center; /* Ensure items are vertically centered */

/* Responsive design */
@media (max-width: 768px) {
  flex-direction: column;
  padding: 10px 20px;
}
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
