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
              <FeatureHeader>Code Text Editor</FeatureHeader>
              <FeatureText>
                Integrated text editor with syntax recommendations used for
                easily typing and grading code for quiz questions and
                assignments.
              </FeatureText>
            </FeatureContainer>

            <FeatureContainer>
              <FeatureIcon>
                <Icon size="huge" name="assistive listening systems" />
              </FeatureIcon>
              <FeatureHeader>Student Help Portal</FeatureHeader>
              <FeatureText>
                Integrated text editor with syntax recommendations used for
                easily typing and grading code for quiz questions and
                assignments.
              </FeatureText>
            </FeatureContainer>

            <FeatureContainer>
              <FeatureIcon>
                <Icon size="huge" name="chart area" />
              </FeatureIcon>
              <FeatureHeader>Grading Trends & Analytics</FeatureHeader>
              <FeatureText>
                Integrated text editor with syntax recommendations used for
                easily typing and grading code for quiz questions and
                assignments.
              </FeatureText>
            </FeatureContainer>

            <FeatureContainer>
              <FeatureIcon>
                <Icon size="huge" name="code branch" />
              </FeatureIcon>
              <FeatureHeader>Easy-to-Use Attendance</FeatureHeader>
              <FeatureText>
                Integrated text editor with syntax recommendations used for
                easily typing and grading code for quiz questions and
                assignments.
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
