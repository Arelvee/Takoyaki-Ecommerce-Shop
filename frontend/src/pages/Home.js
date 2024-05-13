import React from 'react';
import styled from 'styled-components';
import ceo1Image from '../pages/ceo1.jpg'; // Import image of CEO 1
import ceo2Image from '../pages/ceo2.jpg'; // Import image of CEO 2

// Styled components
const HomeContainer = styled.div`
  background-color: #f8f9fa; /* Light gray */
  padding: 80px 0;
`;

const Jumbotron = styled.div`
  background-color: #0B5B7D; /* Coral */
  color: #fff;
  padding: 100px 0;
  text-align: center;
`;

const JumbotronTitle = styled.h1`
  font-size: 5rem;
  margin-bottom: 20px;
`;

const JumbotronSubtitle = styled.p`
  font-size: 1.9rem;
`;

const SectionContainer = styled.div`
  padding: 60px 0;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
`;

const CEOContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const CEOImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%; /* Make the image circular */
  margin-bottom: 20px;
`;

const CEOInfo = styled.div`
  text-align: center;
`;

const CEOName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const CEOMessage = styled.p`
  font-size: 1.2rem;
  padding: 20px;
  background-color: rgba(255, 99, 71, 0.1); /* Transparent background */
  border: 1px solid rgba(255, 99, 71, 0.5); /* Border with minimal visibility */
  border-radius: 10px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Jumbotron>
        <div className="container">
          <JumbotronTitle>Welcome to Takoyamie-Hauz Online Shop</JumbotronTitle>
          <JumbotronSubtitle>Get ready to experience the best takoyaki in town!</JumbotronSubtitle>
        </div>
      </Jumbotron>
      
      <SectionContainer>
        <div className="container">
          <SectionTitle>Latest News</SectionTitle>
          {/* Add latest news content here */}
        </div>
      </SectionContainer>
      
      <SectionContainer>
        <div className="container">
          <SectionTitle>CEO Messages</SectionTitle>
          <CEOContainer>
            <CEOImage src={ceo2Image} alt="CEO 2" />
            <CEOInfo>
              <CEOName>Mrs. FhelJoy Leones-Visaya, LPT, MDiv</CEOName>
              <CEOMessage>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CEOMessage>
            </CEOInfo>
          </CEOContainer>
          <CEOContainer>
            <CEOImage src={ceo1Image} alt="CEO 1" />
            <CEOInfo>
              <CEOName>Engr. Ralph Laurence G. Visaya, ECE, ECT, SO1</CEOName>
              <CEOMessage>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CEOMessage>
            </CEOInfo>
          </CEOContainer>
        </div>
      </SectionContainer>
    </HomeContainer>
  );
}

export default Home;
