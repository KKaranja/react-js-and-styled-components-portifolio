import React from "react";

import styled from "styled-components";

const ContactItem = ({ icon, title, contact1, contact2 }) => {
  return (
    <ContentItemStyled>
      <div className='left-content'>
        <p>{icon}</p>
      </div>
      <div className='right-content'>
        <h6>{title}</h6>
        <p>{contact1}</p>
        <p>{contact2}</p>
      </div>
    </ContentItemStyled>
  );
};

const ContentItemStyled = styled.div`
  padding: 1.5rem 2rem;
  background-color: var(--background-dark-color-2);
  display: flex;
  align-items: center;
  color: var(--white-color);
  border-radius: 10px;
  /* transition: background-color 0.5s ease-in-out; */
  transition: background 1000ms ease, padding 0.8s linear;
  /* transition: 0.3s; */
  &:hover {
    color: var(--primary-color);
    background-color: var(--white-color);

    .left-content {
      border: 1px solid var(--primary-color);
    }
    .right-content {
      h6 {
        color: var(--primary-color);
      }
    }
  }
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
  .left-content {
    padding: 1.5rem;
    border: 1px solid var(--border-color);
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    svg {
      font-size: 2.3rem;
    }
  }
  .right-content {
    h6 {
      font-size: 1.2rem;
      padding-bottom: 0.6rem;
      color: var(--white-color);
    }
    p {
      padding: 0.1rem 0;
    }
  }
`;

export default ContactItem;
