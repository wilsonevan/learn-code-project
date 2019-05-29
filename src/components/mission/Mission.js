import React from "react";
import styled from "styled-components";
import { GlobalColors, GlobalSizes } from "../../styles/GlobalStyles";
import { Icon } from "semantic-ui-react";
import Image1 from "../../images/architecture-buildings-city-325185-gradient.jpg";

const Mission = () => {
  return (
    <>
      <BGImage />
      <PageContainer>
        <Header>Our Mission</Header>
        <InnerContainer>
          <FeatureText>
            After working together as students, TA’s, and teachers, we all found
            that we were not happy with the current learning management systems
            out there. So many are designed for people who don’t know how to
            code, and many of their core features are either locked down or
            challenging to use.
          </FeatureText>
          <FeatureText>
            We decided to launch our own learning management system, but soon
            realized that our needs may be different from other organizations,
            and in the nature of improving the local coding community as a
            whole, decided to launch this open-source project. This allows all
            bootcamps and organizations to work together and build tools that
            help everybody learn more effectively.
          </FeatureText>
          {/* <FeatureText>
            We also found that there were a significant amount of recent
            graduates who were looking to expand their portfolios, and had a
            tremendous amount of critical feedback for the learning process at
            our bootcamp, as well as a passion to improve the learning
            experience for all. This creates a unique atmosphere with this
            project where developers and organizations mutually benefit from
            this collaborative effort.
          </FeatureText> */}
        </InnerContainer>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  margin-top: 7rem;
  margin-bottom: 3rem;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    margin-bottom: 0rem;
  }
`;

const Header = styled.h1`
  background-color: ${GlobalColors.PrimaryWhite};
  z-index: 2;
  text-align: center;
  margin: 0;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    font-size: 2.5rem !important;
  }
`;

const BGImage = styled.div`
  position: absolute;
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
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;

  /* height: 100vh; */
  width: 60%;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    width: 80%;
  }
`;

const FeatureText = styled.h3`
  margin: 0.5rem;
  text-align: center;
  font-weight: 500 !important;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    font-weight: 600 !important;
    font-size: 1rem;
  }
`;
export default Mission;
