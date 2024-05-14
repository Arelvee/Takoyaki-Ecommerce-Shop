import React from 'react';
import styled from 'styled-components';
import ceo1Image from '../pages/ceo1.jpg'; // Import image of CEO 1
import ceo2Image from '../pages/ceo2.jpg'; // Import image of CEO 2
import backgroundImage from '../pages/background.png'; // Import the background image
import newsImage from '../pages/seald.jpg'; // Import the news image
import pdfFile from '../pages/latestdevelopment.pdf';

// Styled components
const HomeContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 80px 0;
  min-height: 100vh;
`;

const Jumbotron = styled.div`
  background: linear-gradient(135deg, #007BFF, #F3F0E8);
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
  border-radius: 50%;
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
  background-color: #B0ECFC;
  border: 1px solid rgba(255, 99, 71, 0.5);
  border-radius: 10px;
`;
const NewsCard = styled.div`
  background: #FFFFFF40;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: row; /* Ensure content and image are displayed side by side */
  margin: 10px 150px; /* Default margin for larger screens */

  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.02);
  }
  @media (max-width: 1399px){
    margin: 10px 0; /* Adjust margin for medium-sized screens */

  }
  @media (max-width: 1200px) {
    margin: 10px 0; /* Adjust margin for medium-sized screens */
  }

  @media (max-width: 992px) {
    margin: 5px 0; /* Adjust margin for smaller screens */
    
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Stack content and image vertically on smallest screens */
    margin: 10px; /* Adjust margin for smallest screens */
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center; /* Center the image horizontally */
  overflow: hidden;
  
  @media (max-width: 1399px) {
    display: flex;
    justify-content: flex-start; /* Center the image on medium-sized screens */
    align-items: center;
    margin: 0;
    height: auto;
    width: 100%;
    flex: wrap 10;
  }


  @media (max-width: 1200px) {
    display: flex;
    justify-content: flex-start; /* Center the image on medium-sized screens */
    align-items: stretch;
    margin: 0;
    height: auto;
    width: 100%;
    flex: wrap 10;
  }

  @media (max-width: 992px) {
    display: flex;
    justify-content: flex-start; /* Center the image on medium-sized screens */
    align-items: stretch;
    margin: 0;
    height: auto;
    width: 100%;
    flex: wrap 10;
 
  }

  @media (max-width: 768px) {
    flex: none; /* Remove flex property on smaller screens */
    justify-content: flex-start; /* Align image to the left on small screens */
  }
`;

const NewsImage = styled.img`
  width: 110%; 
  height: auto;  // Maintain aspect ratio while resizing
  object-fit: cover; 

  @media (max-width: 1200px) {
    width: 100%;  // Reduce width slightly on larger screens
    height: auto; 
  }

  @media (max-width: 992px) {
    width: 100%;  // Ensure the image takes full width on medium screens
    height: auto; 
  
  }

  @media (max-width: 768px) {
    width: 100%;  // Ensure image takes full width on small screens
  }

`;

const ContentContainer = styled.div`
  flex: 2; /* Adjust the width of the content container */
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 10px; /* Reduce padding on smaller screens */
  }
`;
const NewsTitle = styled.h3`
  font-size: 3em;
  margin: 0;
  color: #007BFF;
`;

const NewsDescription = styled.p`
  color: #555;
  margin: 15px 10px 0;
  text-align: justify;
  font-size: 18px;
`;

const ReadMore = styled.a`
  color: #007BFF;
  margin: 10px auto;
  text-decoration: none;
  font-weight: bold;
  border: 2px solid #007BFF;
  border-radius: 5px;
  padding: 8px 16px;
  display: inline-block;

  &:hover {
    background-color: #007BFF;
    color: #fff;
    text-decoration: none;
  }
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
          <NewsCard> 
            <ImageContainer>
              <NewsImage src={newsImage} alt="Latest News" />
            </ImageContainer>
            <ContentContainer>
              <NewsTitle>Exciting New Development</NewsTitle>
              <NewsDescription>
                Takoyamie-Hauz was established during the pandemic as Takoyaki with a menu of different flavors. The CEO expanded its products by offering packaged takoyaki that can be stored in the refrigerator. Due to the desire of the Takoyamie Hauz family to bring their customers the first-hand experience of 'Do-It-Yourself' (DIY) takoyaki, the researchers plan to predict and optimize the storage convenience and prolongation of the takoyaki shelf span. This study focused on optimizing the expiration date of packaged Takoyaki. The researchers’ response variable is the expiration time and date, which are very important for food quality and safety. Five (5) factors were considered in the design of experiments, which are: temperature, humidity, alcohol concentration, methane and storage time. The data will be recorded with the use of food monitoring device for two weeks.  The researchers will make use of a 25 full factorial experimental design. For the evaluation of results, Minitab was used to analyze and visualize the data gathered. The results showed the predicted and optimized results for the expiration date of minimum in 8 days for minimum factor values                
              </NewsDescription>
              <ReadMore href={pdfFile} target="_blank" rel="noopener noreferrer">
                Read more
              </ReadMore>
            </ContentContainer>
          </NewsCard>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="container">
          <SectionTitle>CEO Messages</SectionTitle>
          {[
            { image: ceo2Image, name: 'Mrs. FhelJoy Leones-Visaya, LPT, MDiv', message: 'Welcome! We are so happy you have found us.' },
            { image: ceo1Image, name: 'Engr. Ralph Laurence G. Visaya, ECE, ECT, SO1', message: 'Thank you for supporting us and helping us grow!' }
          ].map((ceo, index) => (
            <CEOContainer key={index}> 
              <CEOImage src={ceo.image} alt={`CEO ${index + 1}`} />
              <CEOInfo>
                <CEOName>{ceo.name}</CEOName>
                <CEOMessage>{ceo.message}</CEOMessage>
              </CEOInfo>
            </CEOContainer>
          ))}
        </div>
      </SectionContainer>
    </HomeContainer>
  );
};

export default Home;