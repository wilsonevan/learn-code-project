import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { GlobalColors, GlobalSizes } from "../../styles/GlobalStyles";
import { Icon } from "semantic-ui-react";

const Intro = () => {
  return (
    <>
      <Container>
        <LeftTextContainer>
          <InnerTextContainer>
            <PrimaryText>Open-Source Learning Management Framework</PrimaryText>
            <SecondaryText>Designed for coding bootcamps.</SecondaryText>
            <SecondaryText>
              Built & maintained by teachers & students.
            </SecondaryText>
          </InnerTextContainer>
        </LeftTextContainer>
        <RightTextContainer>
          <NavLink>
            <LinkContainer>
              <Icon size="huge" name="slack" />
              <LinkText>Join Slack</LinkText>
            </LinkContainer>
          </NavLink>
          <NavLink>
            <LinkContainer>
              <Icon size="huge" name="github" />
              <LinkText>See us on GitHub</LinkText>
            </LinkContainer>
          </NavLink>
          <NavLink>
            <LinkContainer>
              <Icon size="huge" name="rocket" />
              <LinkText>Start a New Project</LinkText>
            </LinkContainer>
          </NavLink>
          <NavLink>
            <LinkContainer>
              <Icon size="huge" name="life ring outline" />
              <LinkText>Get Tech Support</LinkText>
            </LinkContainer>
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
  background-color: ${GlobalColors.PrimaryGreen};
  padding: 3rem;
  border-radius: 10px;
  border: 3px solid white;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

const RightTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* margin-right: 5%; */
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
  color: ${GlobalColors.PrimaryWhite} !important;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${GlobalColors.PrimaryWhite};
  font-size: 3.5rem !important;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    text-align: center;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
`;

const LinkText = styled.h2`
  text-align: left;
  font-size: 2.5rem !important;
  font-weight: 500 !important;
  margin: 0;
  padding-left: 0.5rem;
`;

const SecondaryText = styled.h2`
  color: ${GlobalColors.PrimaryWhite} !important;
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
