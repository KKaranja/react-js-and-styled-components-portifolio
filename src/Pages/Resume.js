import React from "react";
import ResumePage from "../Components/ResumePage";
import Skills from "../Components/Skills";
import { MainLayout } from "../styles/Layout";

const Resume = () => {
  return (
    <MainLayout>
      <Skills />
      <ResumePage />
    </MainLayout>
  );
};



export default Resume;
