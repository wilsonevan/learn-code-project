import React from "react";
import styled from "styled-components";
import { GlobalColors, GlobalSizes } from "../../styles/GlobalStyles";

const ContactUs = () => {
  return (
    <>
      <PageContainer>
        {/* <HeaderImage src={Image1} /> */}
        <OuterContainer>
          <InnerContainer>
            <Header>Contact Us</Header>
            <FeatureHeader>
              For more information, please reach out to evan@cortonacreative.com
              to learn more.
            </FeatureHeader>
            <FeatureText>
              The project is currently led by Cortona Creative and it's
              development team.
            </FeatureText>
          </InnerContainer>
        </OuterContainer>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 70vh;
  width: 100vw;
  margin-bottom: 3rem;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    margin: 0;
    margin-top: 8rem;
    flex-direction: column;
    justify-content: center;
  }
`;

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  width: 100vw;
  padding-left: 5rem;
  padding-right: 5rem;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    width: 80vw;
    padding: 0;
  }
`;

const Header = styled.h1`
  z-index: 2;
  text-align: center;
  color: white;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    font-size: 2rem !important;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 3rem;

  /* height: 100vh; */
  /* width: 100%; */

  /* width: auto; */
  /* background-color: rgba(18, 153, 255, 0.4); */
  background-color: ${GlobalColors.PrimaryGreen};
  padding: 3rem;
  border-radius: 10px;
  border: 3px solid white;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    padding: 1.5rem;
  }
`;

const FeatureHeader = styled.h2`
  margin: 0.5rem;
  text-align: center;
  font-weight: 600 !important;
  color: white !important;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    font-size: 1.2rem;
  }
`;

const FeatureText = styled.h3`
  margin: 0.5rem;
  text-align: center;
  color: white !important;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    font-size: 1rem;
  }
`;

export default ContactUs;
