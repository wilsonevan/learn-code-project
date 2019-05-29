import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GlobalColors, GlobalSizes } from "../../styles/GlobalStyles";
import { Icon } from "semantic-ui-react";
import Image1 from "../../images/nesa-by-makers-736784-gradient.jpg";

const Features = () => {
  return (
    <>
      <Container>
        <HeaderContainer>
          <Header>Key Features</Header>
          <HeaderImage src={Image1} />
        </HeaderContainer>
        <InnerContainer>
          <FeatureContainer>
            <FeatureIcon>
              <Icon
                size={
                  window.screen.width > GlobalSizes.ScreenWidth ? "huge" : "big"
                }
                name="code"
              />
              {/* <SmallIcon size="huge" name="code" /> */}
            </FeatureIcon>
            <FeatureHeader>Code Text Editor</FeatureHeader>
            <FeatureText>
              Integrated text editor with syntax recommendations used for easily
              typing and grading code for quiz questions and assignments.
            </FeatureText>
          </FeatureContainer>

          <FeatureContainer>
            <FeatureIcon>
              <Icon
                size={
                  window.screen.width > GlobalSizes.ScreenWidth ? "huge" : "big"
                }
                name="help"
              />
              {/* <SmallIcon size="huge" name="help" /> */}
            </FeatureIcon>
            <FeatureHeader>Student Help Portal</FeatureHeader>
            <FeatureText>
              Integrated text editor with syntax recommendations used for easily
              typing and grading code for quiz questions and assignments.
            </FeatureText>
          </FeatureContainer>

          <FeatureContainer>
            <FeatureIcon>
              <Icon
                size={
                  window.screen.width > GlobalSizes.ScreenWidth ? "huge" : "big"
                }
                name="chart area"
              />
              {/* <SmallIcon size="huge" name="chart area" /> */}
            </FeatureIcon>
            <FeatureHeader>Grading Trends & Analytics</FeatureHeader>
            <FeatureText>
              Integrated text editor with syntax recommendations used for easily
              typing and grading code for quiz questions and assignments.
            </FeatureText>
          </FeatureContainer>

          <FeatureContainer>
            <FeatureIcon>
              <Icon
                size={
                  window.screen.width > GlobalSizes.ScreenWidth ? "huge" : "big"
                }
                name="code branch"
              />
              {/* <SmallIcon size="huge" name="code branch" /> */}
            </FeatureIcon>
            <FeatureHeader>Easy-to-Use Attendance</FeatureHeader>
            <FeatureText>
              Integrated text editor with syntax recommendations used for easily
              typing and grading code for quiz questions and assignments.
            </FeatureText>
          </FeatureContainer>

          <FeatureContainer>
            <FeatureIcon>
              <Icon
                size={
                  window.screen.width > GlobalSizes.ScreenWidth ? "huge" : "big"
                }
                name="calendar alternate outline"
              />
              {/* <SmallIcon size="huge" name="calendar alternate outline" /> */}
            </FeatureIcon>
            <FeatureHeader>Advanced Course Calendar Views</FeatureHeader>
            <FeatureText>
              Integrated text editor with syntax recommendations used for easily
              typing and grading code for quiz questions and assignments.
            </FeatureText>
          </FeatureContainer>

          <FeatureContainer>
            <FeatureIcon>
              <Icon
                size={
                  window.screen.width > GlobalSizes.ScreenWidth ? "huge" : "big"
                }
                name="laptop"
              />
              {/* <SmallIcon size="huge" name="laptop" /> */}
            </FeatureIcon>
            <FeatureHeader>Direct GitHub Repo Submissions</FeatureHeader>
            <FeatureText>
              Integrated text editor with syntax recommendations used for easily
              typing and grading code for quiz questions and assignments.
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
  margin-bottom: 3rem;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    padding-top: 1rem;
    align-items: center;

  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  /* flex-wrap: wrap-reverse; */
  align-items: center;
  padding-bottom: 3rem;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    justify-content: center;
    align-items: center;
    padding-bottom: 0.5rem;
  }
`;

const Header = styled.h1`
  background-color: ${GlobalColors.PrimaryWhite};
  z-index: 2;
  padding-left: 5rem;
  padding-top: 5rem;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    padding: 0;
    text-align: center;
  }
`;

const HeaderImage = styled.img`
  width: 60%;
  height: auto;

  /* &:after {
    display: inline;
    position: relative;
    background-image: linear-gradient(to left, white 0%, #fff 100%);
    margin-top: 150px;
    height: 150px;
    width: 100%;
    content: "";
  } */

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
  padding-left: 5rem;
  padding-right: 5rem;

  /* height: 100vh; */
  width: 100%;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    padding: 1.5rem;
  }
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
  font-weight: 500 !important;

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

export default Features;
