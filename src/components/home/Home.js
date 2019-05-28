import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GlobalColors, GlobalSizes } from "../../styles/GlobalStyles";
import { Loader } from "semantic-ui-react";
import Intro from "./Intro";
import Features from "./Features";
import ValueProps from './ValueProp'

const Home = () => {
  return (
    <>
      <PageContainer>
        <Intro />
        <Features />
        <ValueProps />
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div``;

export default Home;
