import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GlobalColors, GlobalSizes } from "../../styles/GlobalStyles";
import { Icon } from "semantic-ui-react";

const ValueProp = () => {
  return (
    <>
      <Container>
        <Header>Improving the Bootcamp Experience</Header>
        <InnerContainer>
          <FeatureContainer>
            <FeatureIcon>
              <Icon size="huge" name="code" />
            </FeatureIcon>
            <FeatureHeader>Code Text Editor</FeatureHeader>
            <FeatureText>
              Integrated text editor with syntax recommendations used for easily
              typing and grading code for quiz questions and assignments.
            </FeatureText>
          </FeatureContainer>

          <FeatureContainer>
            <FeatureIcon>
              <Icon size="huge" name="assistive listening systems" />
            </FeatureIcon>
            <FeatureHeader>Student Help Portal</FeatureHeader>
            <FeatureText>
              Integrated text editor with syntax recommendations used for easily
              typing and grading code for quiz questions and assignments.
            </FeatureText>
          </FeatureContainer>

          <FeatureContainer>
            <FeatureIcon>
              <Icon size="huge" name="chart area" />
            </FeatureIcon>
            <FeatureHeader>Grading Trends & Analytics</FeatureHeader>
            <FeatureText>
              Integrated text editor with syntax recommendations used for easily
              typing and grading code for quiz questions and assignments.
            </FeatureText>
          </FeatureContainer>

          <FeatureContainer>
            <FeatureIcon>
              <Icon size="huge" name="code branch" />
            </FeatureIcon>
            <FeatureHeader>Easy-to-Use Attendance</FeatureHeader>
            <FeatureText>
              Integrated text editor with syntax recommendations used for easily
              typing and grading code for quiz questions and assignments.
            </FeatureText>
          </FeatureContainer>

          <FeatureContainer>
            <FeatureIcon>
              <Icon size="huge" name="calendar alternate outline" />
            </FeatureIcon>
            <FeatureHeader>Advanced Course Calendar Views</FeatureHeader>
            <FeatureText>
              Integrated text editor with syntax recommendations used for easily
              typing and grading code for quiz questions and assignments.
            </FeatureText>
          </FeatureContainer>

          <FeatureContainer>
            <FeatureIcon>
              <Icon size="huge" name="laptop" />
            </FeatureIcon>
            <FeatureHeader>
              Direct GitHub Repository Link Submissions
            </FeatureHeader>
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
