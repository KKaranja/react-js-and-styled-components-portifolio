import React from "react";
import styled from "styled-components";

import Resume from "../img/my-img-2.jpg";

const ImageSection = () => {
  return (
    <ImageSectionStyled>
      <LeftContent>
        <img src={Resume} alt='Resume' />
      </LeftContent>
      <RightContent>
        <h4>
          I am <span>Isaac K. Kimura</span>
        </h4>

        <RightContentParagraphy>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          odio blanditiis corrupti architecto, atque totam nesciunt fugit
          accusamus.
        </RightContentParagraphy>
        <AboutInfo>
          <AboutInfoTitle>
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Services</p>
          </AboutInfoTitle>
          <AboutInfoContent>
            <p>: Isaac Karanja Kimura</p>
            <p>: 32</p>
            <p>: Kenyan</p>
            <p>: English, Kiswahili, Kikuyu, French</p>
            <p>: Nairobi, Kenya</p>
            <p>: SEO, Web Design & Web Development</p>
          </AboutInfoContent>
        </AboutInfo>
      </RightContent>
    </ImageSectionStyled>
  );
};

const ImageSectionStyled = styled.div`
  display: flex;
  margin-top: 4rem;
`;

const LeftContent = styled.div`
  width: 100%;
  flex: 1;
  img {
    width: 90%;
    border-radius: 5px;
    object-fit: cover;
  }
`;

const RightContent = styled.div`
  flex: 2;
  h4 {
    font-size: 2rem;
    color: var(--white-color);
    span {
      font-size: 2rem;
      color: var(--white-color);
    }
  }
`;

const RightContentParagraphy = styled.p`
  padding: 1rem 0;
`;

const AboutInfo = styled.div`
  display: flex;
`;

const AboutInfoTitle = styled.div`
  padding-right: 3rem;
  p {
    padding: 0.3rem 0;
    font-weight: 600;
  }
`;

const AboutInfoContent = styled.div`
  p {
    padding: 0.3rem 0;
  }
`;

export default ImageSection;
