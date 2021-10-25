import React from "react";
import styled from "styled-components";

const ServiceCard = ({ image, title, paragraph }) => {
  return (
    <ServiceCardStyled>
      <Container>
        <img src={image} alt='' />
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </Container>
    </ServiceCardStyled>
  );
};

const ServiceCardStyled = styled.div`
  background-color: var(--background-dark-color-2);
  border-left: 1px solid var(--border-color);
  border-top: 8px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  transition: all 2s ease-in-out;
  &:hover {
    border-top: 8px solid var(--primary-color);
    transform: translateY(3px);
  }
`;

const Container = styled.div`
  padding: 1.2rem;
  img {
    width: 30%;
    height: 30%;
    border-radius: 5px;
  }
  h4 {
    color: var(--white-color);
    font-size: 1.3rem;
    padding: 1rem 0;
    position: relative;
    &::after {
      content: "";
      width: 4rem;
      background-color: var(--border-color);
      height: 3px;
      position: absolute;
      left: 0;
      bottom: 0;
      border-radius: 10px;
    }
  }
  p {
    padding: 0.8rem 0;
  }
`;

export default ServiceCard;
