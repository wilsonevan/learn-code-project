import React from "react";
import styled from "styled-components";
import { GlobalColors, GlobalSizes } from "../../styles/GlobalStyles";
import { Icon } from "semantic-ui-react";
import Image1 from "../../images/advice-advise-advisor-7075-gradient.jpg";
import ReactLogo from "../../images/react-logo.png";
import RailsLogo from "../../images/ruby-on-rails-logo.png";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

const Overview = () => {
  return (
    <>
      <PageContainer>
        <BGImage />
        <InnerContainer>
          <Fade bottom duration={3500}>
            <FeatureContainer>
              <Header>Modern framework for modern learning</Header>
              <FeatureHeader>Built on:</FeatureHeader>
              <DetailsContainer>
                <Logo src={ReactLogo} height={"7rem"} />
                <Logo src={RailsLogo} height={"6rem"} bottom={"2rem"} />
              </DetailsContainer>
            </FeatureContainer>
          </Fade>
          <Fade bottom duration={3500}>
            <FeatureContainer>
              <Header>
                Building positive flows to help developers learn more
                effectively
              </Header>
              <Link to="use-cases">
                <Button>
                  <FeatureText>Learn More</FeatureText>
                </Button>
              </Link>
            </FeatureContainer>
          </Fade>
        </InnerContainer>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  position: relative;
  /* top: 20%; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 70vh;
  width: 100vw;
  /* margin-top: 3rem; */
  /* margin-bottom: 3rem; */
  border-bottom: 3px solid ${GlobalColors.SecondaryGreen};

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    margin-bottom: 0rem;
    min-height: 60vh;
    margin-top: 1rem;
    /* padding: 1rem; */
  }
`;

const Header = styled.h1`
  /* background-color: ${GlobalColors.PrimaryWhite}; */
  z-index: 2;
  text-align: center;
  margin: 0;
  font-size: 2.5rem !important;
  width: 80%;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    font-size: 1.5rem !important;
    width: 60%;
  }
`;

const BGImage = styled.div`
  position: relative;
  top: 20%;
  z-index: -100;
  background-image: url(${Image1});
  background-color: #cccccc;

  width: 100vw;
  min-height: 100vh;

  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  /* height: 100vh; */

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    opacity: 0.3;
    min-height: 80vh;
  }
`;

const InnerContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  /* padding-top: 1rem; */
  padding-bottom: 1rem;

  /* height: 100vh; */
  /* width: 60%; */

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    width: 80%;
  }
`;

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 40vw;
  min-width: 30rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    margin: 1rem;
  }
`;

const FeatureHeader = styled.h2`
  margin: 0.5rem;
  text-align: center;
  font-weight: 500 !important;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    font-weight: 600 !important;
    font-size: 1rem;
  }
`;

const Logo = styled.img`
  height: ${props => props.height || "8rem"};
  margin-bottom: ${props => props.bottom || 0};
  opacity: 0.8;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    height: 4rem;
  }
`;

const FeatureText = styled.h2`
  margin: 0.5rem;
  text-align: center;
  font-weight: 500 !important;
  color: white !important;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    font-weight: 600 !important;
    font-size: 1rem;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    width: 60%;
  }
`;

const Button = styled.button`
  text-decoration: none;
  border: none;
  border-radius: 5px;
  padding: 1rem 1.8rem;
  background-color: ${GlobalColors.PrimaryGreen};
  color: white;
  letter-spacing: 1.5px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  outline: none;
  transition-duration: 0.1s;
  margin: 1rem;

  :hover {
    color: white;
    background-color: ${GlobalColors.SecondaryGreen};
  }

  :active {
    box-shadow: 0 0 0 3px #ff6d00;
    background-color: white;
    color: #ff6d00;
  }
`;

export default Overview;
