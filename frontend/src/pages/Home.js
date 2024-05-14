import React from 'react';
import styled from 'styled-components';
import ceo1Image from '../pages/ceo1.jpg'; // Import image of CEO 1
import ceo2Image from '../pages/ceo2.jpg'; // Import image of CEO 2
import backgroundImage from '../pages/background.png'; // Import the background image
import newsImage from '../pages/seald.jpg'; // Import the news image
import pdfFile from '../pages/latestdevelopment.pdf';

// Styled components
const HomeContainer = styled.div`
  background-image: url(${backgroundImage}); /* Background image */
  background-size: cover; /* Cover the entire page */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  padding: 80px 0;
  min-height: 100vh; /* Ensure it covers the entire viewport height */
`;

const Jumbotron = styled.div`
background: linear-gradient(135deg, #007BFF, #F3F0E8); /* Subtle gradient background */
  color: #fff;
  padding: 100px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  background-color: #B0ECFC; /* Transparent background */
  border: 1px solid rgba(255, 99, 71, 0.5); /* Border with minimal visibility */
  border-radius: 10px;
`;

const NewsCard = styled.div`
  background: #FFFFFF40;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  margin: 20px 0;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }
`;

const ImageContainer = styled.div`
  flex: 3;
  min-width: 150px;
  max-width: 200px;
  img {
    width: 110%;
    height: auto;
    display: block;
  }
`;

const ContentContainer = styled.div`
  flex: 2;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NewsTitle = styled.h3`
  font-size: 2em;
  margin: 0;
  color: #007BFF;
`;

const NewsDescription = styled.p`
  color: #555;
  margin: 15px 10px 0;
  text-align: justify;
  font-size: 17px;
`;

const ReadMore = styled.a`
  color: #007BFF;
  margin: 10px 400px;
  text-decoration: none;
  font-weight: bold;
  border: 2px solid #007BFF; /* Adjusted border width and color */
  border-radius: 5px; /* Consistent border-radius for a button-like look */
  padding: 8px 16px; /* Added padding to make it look like a button */
  display: inline-block; /* Ensures it respects padding and border as a block */

  &:hover {
    background-color: #007BFF; /* Button-like hover effect */
    color: #fff; /* Change text color on hover */
    text-decoration: none; /* Ensure text stays undecorated */
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Jumbotron>
        <div className="container">
          <JumbotronTitle className="jumbotron-title">Welcome to Takoyamie-Hauz Online Shop</JumbotronTitle>
          <JumbotronSubtitle>Get ready to experience the best takoyaki in town!</JumbotronSubtitle>
        </div>
      </Jumbotron>

      <SectionContainer>
        <div className="container">
          <SectionTitle>Latest News</SectionTitle>
          <NewsCard>
            <ImageContainer>
              <img src={newsImage} alt="Latest News" />
            </ImageContainer>
            <ContentContainer>
              <NewsTitle>Exciting New Development</NewsTitle>
              <NewsDescription>Takoyamie-Hauz was established during the pandemic as Takoyaki with a menu of different flavors. The CEO expanded its products by offering packaged takoyaki that can be stored in the refrigerator. Due to the desire of the Takoyamie Hauz family to bring their customers the first-hand experience of 'Do-It-Yourself' (DIY) takoyaki, the researchers plan to predict and optimize the storage convenience and prolongation of the takoyaki shelf span. This study focused on optimizing the expiration date of packaged Takoyaki. The researchers’ response variable is the expiration time and date, which are very important for food quality and safety. Five (5) factors were considered in the design of experiments, which are: temperature, humidity, alcohol concentration, methane and storage time. The data will be recorded with the use of food monitoring device for two weeks.  The researchers will make use of a 25 full factorial experimental design. For the evaluation of results, Minitab was used to analyze and visualize the data gathered. The results showed the predicted and optimized results for the expiration date of minimum in 8 days for minimum factor values</NewsDescription>
              <ReadMore href={pdfFile} target="_blank" rel="noopener noreferrer">Read more</ReadMore>
            </ContentContainer>
          </NewsCard>
          {/* Add more NewsCard components as needed */}
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
