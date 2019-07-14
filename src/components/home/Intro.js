import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GlobalColors, GlobalSizes } from "../../styles/GlobalStyles";
import { Icon } from "semantic-ui-react";
import { Heroku } from "grommet-icons";
import { Fade, Zoom } from "react-reveal";

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
        <Fade right duration={2500}>
          <ArrowContainer>
            <Icon
              size={
                window.screen.width > GlobalSizes.ScreenWidth ? "huge" : "huge"
              }
              name="chevron right"
            />
          </ArrowContainer>

          <RightTextContainer>
            <NavLink href="" target="_blank">
              <LinkContainer>
                <Heroku
                  size="medium"
                  // window.screen.width > GlobalSizes.ScreenWidth
                  //   ? "xlarge"
                  //   : "medium"
                  // }
                  style={{ marginRight: "8px", marginLeft: "3px" }}
                  color={GlobalColors.PrimaryBlack}
                />
                <LinkText>Try a Demo</LinkText>
              </LinkContainer>
            </NavLink>
            <NavLink
              href="https://join.slack.com/t/code-learning-project/shared_invite/enQtNjk0MTIyODc2MTI4LTU4NjUxMGM2ZDI5NDYzZjMxNGIxMzMyODU3NzdlZjM1YmY2NmExNTFkMzNkMzU0NGQyMTE0YjQzMGU3YjY4NmM"
              target="_blank"
            >
              <LinkContainer>
                <Icon
                  size={
                    window.screen.width > GlobalSizes.ScreenWidth
                      ? "huge"
                      : "big"
                  }
                  name="slack"
                />
                <LinkText>Join Slack</LinkText>
              </LinkContainer>
            </NavLink>
            <NavLink
              href="https://github.com/cortona-creative/code-learning-project"
              target="_blank"
            >
              <LinkContainer>
                <Icon
                  size={
                    window.screen.width > GlobalSizes.ScreenWidth
                      ? "huge"
                      : "big"
                  }
                  name="github"
                />
                <LinkText>See us on GitHub</LinkText>
              </LinkContainer>
            </NavLink>
            <NavLink>
              <LinkContainer>
                <Icon
                  size={
                    window.screen.width > GlobalSizes.ScreenWidth
                      ? "huge"
                      : "big"
                  }
                  name="rocket"
                />
                <LinkText>Start a New Project</LinkText>
              </LinkContainer>
            </NavLink>
            <NavLink
              href="https://join.slack.com/t/code-learning-project/shared_invite/enQtNjk0MTIyODc2MTI4LTU4NjUxMGM2ZDI5NDYzZjMxNGIxMzMyODU3NzdlZjM1YmY2NmExNTFkMzNkMzU0NGQyMTE0YjQzMGU3YjY4NmM"
              target="_blank"
            >
              <LinkContainer>
                <Icon
                  size={
                    window.screen.width > GlobalSizes.ScreenWidth
                      ? "huge"
                      : "big"
                  }
                  name="life ring outline"
                />
                <LinkText>Get Tech Support</LinkText>
              </LinkContainer>
            </NavLink>
          </RightTextContainer>
        </Fade>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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
    margin-top: 8rem;
  }
`;

const LeftTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  margin: 20px;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    width: 80%;
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
    padding: 1.5rem;
  }
`;

const ArrowContainer = styled.div``;

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
    align-items: flex-start;
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
    font-size: 1.8rem !important;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    padding: 0.5rem;
    /* flex-direction: column; */
    justify-content: center;
    align-items: left;
    width: auto;
  }
`;

const LinkText = styled.h2`
  text-align: left;
  font-size: 2.5rem !important;
  font-weight: 500 !important;
  margin: 0;
  padding-left: 0.5rem;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    text-align: left;
    font-size: 1.5rem !important;
    /* width: 100%; */
  }
`;

const SecondaryText = styled.h2`
  color: ${GlobalColors.PrimaryWhite} !important;
  margin: 0;
  margin-bottom: 0.25rem;
  font-weight: 500 !important;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    text-align: center;
    font-size: 1.2rem !important;
    font-weight: 400 !important;
  }
`;

const NavLink = styled.a`
  :hover {
    cursor: pointer;
  }
`;

export default Intro;
