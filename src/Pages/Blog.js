import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";

import blogs from "../data/blogs";
import { InnerLayout, MainLayout } from "../styles/Layout";

const Blog = () => {
  return (
    <MainLayout>
      <BlogPageStyled>
        <Title title={"Blogs"} span={"Blogs"} />
        <InnerLayout className={"blog"}>
          {blogs.map((blogs) => {
            return (
              <div key={blogs.id} className={"blog-item"}>
                <div className='image'>
                  <img src={blogs.image} alt='' />
                </div>
                <div className='title'>
                  <a href={blogs.link}>{blogs.title}</a>
                </div>
              </div>
            );
          })}
        </InnerLayout>
      </BlogPageStyled>
    </MainLayout>
  );
};

const BlogPageStyled = styled.div`
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;

    .blog-item {
      background-color: var(--background-dark-color-2);
      padding: 1rem 1rem;
    }
    .image {
      width: 100%;
      height: 90%;
      overflow: hidden;
      padding-bottom: 0.5rem;
      img {
        width: 100%;
        object-fit: cover;
        transition: all 0.4s ease-in-out;
        &:hover {
          cursor: pointer;
          transform: rotate(3deg) scale(1.1);
        }
      }
    }
    .title {
      a {
        font-size: 1.05rem;
        color: var(--white-color);
        padding: 2rem 0;
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
`;

export default Blog;
