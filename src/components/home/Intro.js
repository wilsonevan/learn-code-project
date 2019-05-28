import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { GlobalColors, GlobalSizes } from "../../styles/GlobalStyles";

const Intro = () => {
  return (
    <>
      <Container>
        <LeftTextContainer>
          <InnerTextContainer>
            <PrimaryText>The Code Learning Project</PrimaryText>
            <SecondaryText>
              Open-source learning management system designed for coding
              bootcamps.
            </SecondaryText>
            <SecondaryText>
              Built & maintained by teachers & students.
            </SecondaryText>
          </InnerTextContainer>
        </LeftTextContainer>
        <RightTextContainer>
          <NavLink>
            <LinkText>Join Slack</LinkText>
          </NavLink>
          <NavLink>
            <LinkText>See us on GitHub</LinkText>
          </NavLink>
          <NavLink>
            <LinkText>Start a New Project</LinkText>
          </NavLink>
          <NavLink>
            <LinkText>Get Tech Support</LinkText>
          </NavLink>
        </RightTextContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  min-height: 80vh;
  width: 100vw;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  /* border-bottom: #349dc4;
  border-bottom-width: 3px;
  border-bottom-style: solid; */

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    justify-content: center;
    align-items: center;
  }
`;

const LeftTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
  }
`;

const InnerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  width: auto;
  /* background-color: rgba(18, 153, 255, 0.4); */
  background-color: ${GlobalColors.SecondaryGreen};
  padding: 3rem;
  border-radius: 10px;
  border: 1px solid white;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

const RightTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 5%;
  padding: 20px;

  @media (max-width: 925px) {
    text-align: center;
    margin: 0;
    justify-content: center;
    align-items: center;
    width: 80vw;
  }
`;

const PrimaryText = styled.h1`
  color: white !important;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${GlobalColors.PrimaryWhite};

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    text-align: center;
  }
`;

const LinkText = styled.h2`
  text-align: center;
  font-size: 2.5rem !important;
`;

const SecondaryText = styled.h2`
  color: white !important;
  margin: 0;
  margin-bottom: 0.25rem;
  font-weight: 500 !important;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    text-align: center;
  }
`;

const NavLink = styled.a`
  :hover {
    cursor: pointer;
  }
`;

export default Intro;
