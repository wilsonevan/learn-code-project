import React from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";
import {GlobalColors} from '../../styles/GlobalStyles'

const Documentation = ({ history }) => (
  <CenteredEverything>
    <CenteredDiv>
      <h1>Coming Soon...</h1>
    </CenteredDiv>
    <ButtonContainer>
      <Button color="white">
        <h3 onClick={() => history.goBack()}> Go Back </h3>
      </Button>
    </ButtonContainer>
  </CenteredEverything>
);

const CenteredDiv = styled.div`
  margin: 12px;
`;

const ButtonContainer = styled.div`
  padding: 2rem;
`;

const CenteredEverything = styled.div`
  height: 100vh;
  background-color: ${GlobalColors.PrimaryWhite};
  padding-top: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

export default Documentation;
