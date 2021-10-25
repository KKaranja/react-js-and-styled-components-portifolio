import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";
import ServiceCard from "./ServiceCard";
import Title from "./Title";
import SEO from "../img/external-seo.png";
import WebDesign from "../img/external-web-design.png";
import WebDev from "../img/external-web-development.png";

const ServiceSection = () => {
  return (
    <InnerLayout>
      <ServiceSectionStyled>
        <Title title={"Services"} span={"Services"} />
        <Services>
          <ServiceCard
            image={SEO}
            title={"SEO"}
            paragraph={
              "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque repellendus incidunt iure!"
            }
          />
          <MiddleCard>
            <ServiceCard
              image={WebDesign}
              title={"Web Design"}
              paragraph={
                "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque repellendus incidunt iure!"
              }
            />
          </MiddleCard>
          <ServiceCard
            image={WebDev}
            title={"Web Development"}
            paragraph={
              "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque repellendus incidunt iure!"
            }
          />
        </Services>
      </ServiceSectionStyled>
    </InnerLayout>
  );
};

const ServiceSectionStyled = styled.section``;

const Services = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
`;

const MiddleCard = styled.div`
  margin: 0 1.2rem;
`;

export default ServiceSection;
