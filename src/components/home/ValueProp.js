import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GlobalColors, GlobalSizes } from "../../styles/GlobalStyles";
import { Icon } from "semantic-ui-react";
import Image1 from "../../images/adult-blur-business-2102416-gradient.jpg";

const ValueProp = () => {
  return (
    <>
      <PageContainer>
        <HeaderImage src={Image1} />
        <OuterContainer>
          <Header>Improving the Bootcamp Experience</Header>
          <InnerContainer>
            <FeatureContainer>
              {/* <FeatureIcon>
                <Icon size="huge" name="code" />
              </FeatureIcon> */}
              <FeatureHeader>Collaborative</FeatureHeader>
              <FeatureText>
                A free, collaborative project for all students and developers.
                Designed to enhance the learning process for those learning code
                around the world.
              </FeatureText>
            </FeatureContainer>

            <FeatureContainer>
              {/* <FeatureIcon>
                <Icon size="huge" name="assistive listening systems" />
              </FeatureIcon> */}
              <FeatureHeader>High Value</FeatureHeader>
              <FeatureText>
                Create your own LMS instance and host it yourself, then
                customize it specifically for your organization. Our large code
                base allows developers to easily pick and choose the features
                they want to enable.
              </FeatureText>
            </FeatureContainer>

            <FeatureContainer>
              {/* <FeatureIcon>
                <Icon size="huge" name="chart area" />
              </FeatureIcon> */}
              <FeatureHeader>Scalable</FeatureHeader>
              <FeatureText>
                Our free framework can be hosted on low-cost servers for those
                who are starting out, and grow with your organization.
              </FeatureText>
            </FeatureContainer>

            <FeatureContainer>
              {/* <FeatureIcon>
                <Icon size="huge" name="code branch" />
              </FeatureIcon> */}
              <FeatureHeader>Simple Setup</FeatureHeader>
              <FeatureText>
                Download and install it on your own, or let us build and set it
                up for you!
              </FeatureText>
            </FeatureContainer>
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
`;

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 70vh;
  width: 100vw;
  padding-left: 5rem;
  padding-right: 5rem;
`;

const Header = styled.h1`
  background-color: ${GlobalColors.PrimaryWhite};
  z-index: 2;
  text-align: center;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    padding: 0;
    text-align: center;
    font-size: 2.5rem !important;
    padding-top: 1.5rem;
    border-top: 1px solid ${GlobalColors.SecondaryGreen};
  }
`;

const HeaderImage = styled.img`
  width: 30%;
  /* height: 100vh; */

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    display: none;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 3rem;

  /* height: 100vh; */
  width: 100%;  
`;

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 34%;
  min-width: 20rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  /* flex: 1 0 34%; */

`;

const FeatureIcon = styled.div``;

const FeatureHeader = styled.h2`
  margin: 0.5rem;
  text-align: center;
  font-weight: 600 !important;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    font-size: 1.5rem;
  }
`;

const FeatureText = styled.h3`
  margin: 0.5rem;
  text-align: center;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    font-size: 1rem;
  }
`;

export default ValueProp;
