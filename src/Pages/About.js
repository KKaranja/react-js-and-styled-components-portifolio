import React from "react";
import styled from "styled-components";
import ImageSection from "../Components/ImageSection";
import Title from "../Components/Title";

import { MainLayout } from "../styles/Layout";

const About = () => {
  return (
    <MainLayout>
      <AboutPageStyled>
        <Title title={"About Me"} span={"About Me"} />
        <ImageSection />
      </AboutPageStyled>
    </MainLayout>
  );
};

const AboutPageStyled = styled.section``;

export default About;
