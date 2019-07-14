import React from "react";
import styled from "styled-components";
import { GlobalColors, GlobalSizes } from "../../styles/GlobalStyles";
import { Icon } from "semantic-ui-react";
import Image1 from "../../images/sebastian-mantel-105235-unsplash-cropped-gradient.jpg";
import { Fade } from "react-reveal";

const UseCases = () => {
  return (
    <>
      <PageContainer>
        <OuterContainer>
          <Fade bottom cascade duration={3500}>
            <Header>Let's do better, together.</Header>
            <InnerContainer>
              <FeatureContainer>
                <FeatureHeader>Current LMS not enough?</FeatureHeader>
                <FeatureText>
                  Our Componetized features allow for easily implementing
                  features designed with coding in mind.
                </FeatureText>
              </FeatureContainer>

              <FeatureContainer>
                <FeatureHeader>
                  Want to save on costs by hosting your own site?
                </FeatureHeader>
                <FeatureText>
                  Create your own LMS instance and host it yourself, then
                  customize it specifically for your organization. Our large
                  code base allows developers to easily pick and choose the
                  features they want to enable.
                </FeatureText>
              </FeatureContainer>

              <FeatureContainer>
                <FeatureHeader>
                  Looking for features unique to your own organization?
                </FeatureHeader>
                <FeatureText>
                  Build your own features and choose whether or not to share
                  them
                </FeatureText>
              </FeatureContainer>

              <FeatureContainer>
                <FeatureHeader>
                  Prefer to have some help launching your own LMS?
                </FeatureHeader>
                <FeatureText>Our team can help!</FeatureText>
              </FeatureContainer>
            </InnerContainer>
          </Fade>
        </OuterContainer>
        <HeaderImage src={Image1} />
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; */
  min-height: 120vh;
  width: 100vw;
  /* margin-bottom: 3rem; */

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    height: 130vh;
    /* background-image: url(${Image1});
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 
    z-index: -10; */
  }
`;

const OuterContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 18%;
  left: 0;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 80vh;
  /* width: 100vw; */
  /* padding-left: 5rem; */
  /* padding-right: 5rem; */
  /* margin-top: 8rem; */
  /* margin-right: 30%; */

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    width: 100%;
    margin: 0;
  }
`;

const Header = styled.h1`
  /* background-color: ${GlobalColors.PrimaryWhite}; */
  z-index: -2;
  text-align: center;
  margin: 0;
  font-size: 3rem !important;


  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    text-align: center;
    font-size: 2.5rem !important;
    width: 80vw;
    margin: 0;
  }
`;

const HeaderImage = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  z-index: -10;
  /* width: 40%; */
  height: 140vh;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    opacity: 0.2;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: flex-start;
  /* padding-top: 1rem; */
  padding-bottom: 3rem;
  z-index: 10;

  min-height: 70vh;
  width: 80vw;  

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    padding: 0;
  }
`;

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 35%;
  min-width: 20rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    width: 33%;
  }
`;

const FeatureIcon = styled.div``;

const FeatureHeader = styled.h2`
  margin: 0.5rem;
  text-align: center;
  font-weight: 900 !important;
  font-size: 1.5rem !important;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    text-align: center;
    font-size: 1.2rem !important;
    width: 80%;
  }
`;

const FeatureText = styled.h3`
  margin: 0.5rem;
  text-align: center;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    font-size: 1rem;
    font-weight: 400 !important;
  }
`;
export default UseCases;
