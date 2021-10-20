import React from "react";
import styled from "styled-components";
import Particle from "../Components/Particles";
import { Facebook, GitHub, LinkedIn } from "@material-ui/icons";

const HomePage = () => {
  return (
    <HomePageStyled>
      <ParticlesJs>
        <Particle />
      </ParticlesJs>
      <Typograhphy>
        <Heading>
          Hi, I'm <span>Isaac Kimura</span>
        </Heading>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          dignissimos doloribus facere autem deserunt amet quos voluptatem
          fugiat, delectus suscipit?
        </Description>
        <Icons>
          <Icon
            href='https://www.facebook.com/ikaranja2'
            className='i-facebook'
          >
            <Facebook />
          </Icon>
          <Icon href='https://github.com/KKaranja' className='i-github'>
            <GitHub />
          </Icon>
          <Icon
            href='https://www.linkedin.com/in/isaac-kimura-a079a4129/'
            className='i-linkedin'
          >
            <LinkedIn />
          </Icon>
        </Icons>
      </Typograhphy>
    </HomePageStyled>
  );
};

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const ParticlesJs = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const Typograhphy = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 80%;
`;

const Heading = styled.h1``;

const Description = styled.p``;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  .i-github {
    &:hover {
      border: 2px solid #3e065f;
      color: #3e065f;
    }
  }
  .i-linkedin {
    &:hover {
      border: 2px solid #1a508b;
      color: #1a508b;
    }
  }
`;

const Icon = styled.a`
  border: 2px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    border: 2px solid var(--primary-clor);
    color: var(--primary-clor);
  }
  &:not(:last-child) {
    margin-right: 1rem !important;
  }
  svg {
    margin: 0.5rem;
  }
`;

export default HomePage;
