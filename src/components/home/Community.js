import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GlobalColors, GlobalSizes } from "../../styles/GlobalStyles";
import { Icon } from "semantic-ui-react";

const ValueProp = () => {
  return (
    <>
      <Container>
        <Header>Join our community!</Header>
        <Footnote>
          We are excited to be launching this project as of June 2019!
        </Footnote>
        <Footnote>
          It has been a several month work in progress and is now ready for
          collaborators
        </Footnote>
        <Footnote>
          All are welcome to work together with us in order to improve the
          experience for all new members who want to learn to code
        </Footnote>
        <InnerContainer>
          <FeatureContainer>
            <FeatureIcon>
              <Icon size="huge" name="history" />
            </FeatureIcon>
            <FeatureHeader>755</FeatureHeader>
            <FeatureText>Commits</FeatureText>
          </FeatureContainer>

          <FeatureContainer>
            <FeatureIcon>
              <Icon size="huge" name="users" />
            </FeatureIcon>
            <FeatureHeader>6</FeatureHeader>
            <FeatureText>Contributors</FeatureText>
          </FeatureContainer>

          <FeatureContainer>
            <FeatureIcon>
              <Icon size="huge" name="slack hash" />
            </FeatureIcon>
            <FeatureHeader>6</FeatureHeader>
            <FeatureText>Slack Members</FeatureText>
          </FeatureContainer>

          {/* <FeatureContainer>
            <FeatureIcon>
              <Icon size="huge" name="star outline" />
            </FeatureIcon>
            <FeatureHeader>1</FeatureHeader>
            <FeatureText>
              GitHub Stars
            </FeatureText>
          </FeatureContainer>

          <FeatureContainer>
            <FeatureIcon>
              <Icon size="huge" name="code branch" />
            </FeatureIcon>
            <FeatureHeader>1</FeatureHeader>
            <FeatureText>
              Forks
            </FeatureText>
          </FeatureContainer>

          <FeatureContainer>
            <FeatureIcon>
              <Icon size="huge" name="download" />
            </FeatureIcon>
            <FeatureHeader>
              0
            </FeatureHeader>
            <FeatureText>
              Downloads
            </FeatureText>
          </FeatureContainer> */}
        </InnerContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  width: 100vw;
  padding: 8rem;
  
`;

const Header = styled.h1`
`;

const Footnote = styled.h2`
  margin: 0.3rem;
  width: 70%;
  text-align: center;
  
`

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
  margin: 1rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 500 !important;
  /* color: ${GlobalColors.PrimaryGreen}; */

`;

const FeatureText = styled.h2`
  margin: 0.5rem;
  text-align: center;
  
`;

export default ValueProp;
