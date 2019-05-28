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
              <FeatureIcon>
                <Icon size="huge" name="code" />
              </FeatureIcon>
              <FeatureHeader>Collaborative</FeatureHeader>
              <FeatureText>
                A free, collaborative project for all developers, especially
                junior developers.
              </FeatureText>
            </FeatureContainer>

            <FeatureContainer>
              <FeatureIcon>
                <Icon size="huge" name="assistive listening systems" />
              </FeatureIcon>
              <FeatureHeader>High Value</FeatureHeader>
              <FeatureText>
                Create your own LMS instance and host it yourself, and customize
                it specifically for your bootcamp. Our large code base allows
                developers to easily pick and choose the features they want to
                enable.
              </FeatureText>
            </FeatureContainer>

            <FeatureContainer>
              <FeatureIcon>
                <Icon size="huge" name="chart area" />
              </FeatureIcon>
              <FeatureHeader>Scalable</FeatureHeader>
              <FeatureText>
                Spree is cloud-ready, so lets you be cost-efficient on slow
                days, yet handles busy days or rapid growth with ease. With the
                right architecture and infrastructure Spree fits unlimited SKUs
                or orders and scales up to millions of users per day.
              </FeatureText>
            </FeatureContainer>

            <FeatureContainer>
              <FeatureIcon>
                <Icon size="huge" name="code branch" />
              </FeatureIcon>
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
  padding-left: 5rem;
  padding-top: 5rem;
`;

const HeaderImage = styled.img`
  width: 30%;
  /* height: 100vh; */
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
  width: 28%;
  min-width: 20rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const FeatureIcon = styled.div``;

const FeatureHeader = styled.h2`
  margin: 0.5rem;
  text-align: center;
`;

const FeatureText = styled.h3`
  margin: 0.5rem;
  text-align: center;
`;

export default ValueProp;
