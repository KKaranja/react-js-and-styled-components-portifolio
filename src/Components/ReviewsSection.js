import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";
import ReviewItem from "./ReviewItem";
import Title from "./Title";

const ReviewsSection = () => {
  return (
    <ReviewsSectionStyled>
      <Title title={"Reviews"} span={"Reviews"} />
      <InnerLayout>
        <Reviews>
          <ReviewItem
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsa aliquam odio voluptatem!"
            }
          />
          <ReviewItem
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsa aliquam odio voluptatem!"
            }
          />
        </Reviews>
      </InnerLayout>
    </ReviewsSectionStyled>
  );
};

const ReviewsSectionStyled = styled.section``;

const Reviews = styled.div`
  display: flex;
`;

export default ReviewsSection;
