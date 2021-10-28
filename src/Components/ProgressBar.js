import React from "react";
import styled from "styled-components";

const ProgressBar = ({ title, width, text }) => {
  return (
    <ProgressBarStyled>
      <h6>{title}</h6>
      <div className='progress-bar'>
        <p>{text}</p>
        <div className='progress'>
          <span style={{ width: width }}></span>
        </div>
      </div>
    </ProgressBarStyled>
  );
};

const ProgressBarStyled = styled.div`
  h6 {
    text-transform: uppercase;
  }
  .progress-bar {
    display: flex;
    align-items: center;
    p {
      padding-right: 1.1rem;
    }
    .progress {
      position: relative;
      width: 100%;
      height: 0.4rem;
      background-color: var(--border-color);
      border-radius: 10px;
      span {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 100%;
        border-radius: 10px;
        background-color: var(--primary-color);
      }
    }
  }
`;

export default ProgressBar;
