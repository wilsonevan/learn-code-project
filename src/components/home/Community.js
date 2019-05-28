import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GlobalColors, GlobalSizes } from "../../styles/GlobalStyles";
import { Icon } from "semantic-ui-react";

const ValueProp = () => {
  return (
    <>
      <Container>
        <Header>Join our community!</Header>
        <InnerContainer>
          <FeatureContainer>
            <FeatureIcon>
              <Icon size="huge" name="code" />
            </FeatureIcon>
            <FeatureHeader>Open-source</FeatureHeader>
            <FeatureText>
              The Code Learning Project is open source, so there are no license
              or transaction costs.
            </FeatureText>
          </FeatureContainer>

          <FeatureContainer>
            <FeatureIcon>
              <Icon size="huge" name="assistive listening systems" />
            </FeatureIcon>
            <FeatureHeader>Collaboration</FeatureHeader>
            <FeatureText>
              Every bootcamp has different needs, but many overlap. Every
              bootcamp teaches important coding languages, but not all of them.
              Harness the Collaborative community of all bootcamps working
              together to build tools that improve quality of education for all.
            </FeatureText>
          </FeatureContainer>

          <FeatureContainer>
            <FeatureIcon>
              <Icon size="huge" name="chart area" />
            </FeatureIcon>
            <FeatureHeader>Extensible</FeatureHeader>
            <FeatureText>
              Do you need to differentiate from competition with a unique
              functionality reflecting your business model? Or a beautiful
              storefront? Spree empowers you to do both, because it’s a set of
              building blocks which developers can move around at will.
            </FeatureText>
          </FeatureContainer>

          <FeatureContainer>
            <FeatureIcon>
              <Icon size="huge" name="code branch" />
            </FeatureIcon>
            <FeatureHeader>Scalable</FeatureHeader>
            <FeatureText>
              The Code Learning Project is cloud-ready, so lets you scale up as
              your bootcamp grows. It is also great for online bootcamps or
              academies as they scale internationally.
            </FeatureText>
          </FeatureContainer>

          <FeatureContainer>
            <FeatureIcon>
              <Icon size="huge" name="calendar alternate outline" />
            </FeatureIcon>
            <FeatureHeader>Short time to market</FeatureHeader>
            <FeatureText>
              The Code Learning Project is built with Ruby on Rails and Reactjs,
              and expanding into further platforms for bootcamps which focus on
              other stacks.
            </FeatureText>
          </FeatureContainer>

          <FeatureContainer>
            <FeatureIcon>
              <Icon size="huge" name="laptop" />
            </FeatureIcon>
            <FeatureHeader>
              Active community and a dedicated core team
            </FeatureHeader>
            <FeatureText>
              An active community of developers keeps this project moving
              forward submitting pull request or issues, but it takes a group of
              focused developers and testers collaborating closely to release
              new versions and resolve any ongoing issues. Our core team has
              your back day-in and day-out!
            </FeatureText>
          </FeatureContainer>
        </InnerContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 70vh;
  width: 100vw;
  padding-left: 5rem;
  padding-right: 5rem;
`;

const Header = styled.h1``;

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
