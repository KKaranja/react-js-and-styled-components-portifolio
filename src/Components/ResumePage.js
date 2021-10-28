import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";
import SmallTitle from "./SmallTitle";
import Title from "./Title";
import { BusinessCenter, School } from "@material-ui/icons";
import ResumeItem from "./ResumeItem";

const ResumePage = () => {
  const work = <BusinessCenter />;
  const school = <School />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"Resume"} />
      <InnerLayout>
        <div className='small-title'>
          <SmallTitle icon={work} title={"Working Experience"} />
        </div>
        <div className='resume-content'>
          <ResumeItem
            year={"2019 - Present"}
            title={"SEO Executive"}
            subTitle={"iProspect East Africa Ltd"}
            text={
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste sit eaque. Qui minima consequuntur nemo necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi porro soluta, quasi adipisci atque veniam."
            }
          />
          <ResumeItem
            year={"2018 - 2019"}
            title={"Junior SEO Specialist"}
            subTitle={"iProspect East Africa Ltd"}
            text={
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste sit eaque. Qui minima consequuntur nemo necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi porro soluta, quasi adipisci atque veniam."
            }
          />
          <div className='u-margin-bottom'>
            <ResumeItem
              year={"2017 - 2018"}
              title={"Junior Web Developer"}
              subTitle={"MyCv Limited"}
              text={
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste sit eaque. Qui minima consequuntur nemo necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi porro soluta, quasi adipisci atque veniam."
              }
            />
          </div>
        </div>
        <div className='small-title'>
          <SmallTitle icon={school} title={"Education"} />
        </div>
        <div className='resume-content'>
          <ResumeItem
            year={"2013 - 2017"}
            title={"Bsc Infomation Technology"}
            subTitle={"JKUAT"}
            text={
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste sit eaque. Qui minima consequuntur nemo necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi porro soluta, quasi adipisci atque veniam."
            }
          />
          <ResumeItem
            year={"2008 - 2010"}
            title={"KSCE"}
            subTitle={"Ngumo Boys High School"}
            text={
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste sit eaque. Qui minima consequuntur nemo necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi porro soluta, quasi adipisci atque veniam."
            }
          />
          <ResumeItem
            year={"2005 - 2008"}
            title={"KCSE"}
            subTitle={"Kambaa High School"}
            text={
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste sit eaque. Qui minima consequuntur nemo necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi porro soluta, quasi adipisci atque veniam."
            }
          />
          <ResumeItem
            year={"1997 - 2004"}
            title={"KCPE"}
            subTitle={"Pesi Primary"}
            text={
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste sit eaque. Qui minima consequuntur nemo necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi porro soluta, quasi adipisci atque veniam."
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
};

const ResumeStyled = styled.div`
  .small-title {
    padding-bottom: 3rem;
  }
  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;

export default ResumePage;
