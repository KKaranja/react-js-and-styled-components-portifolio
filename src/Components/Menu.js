import React from "react";
import styled from "styled-components";
import { GitHub, Visibility } from "@material-ui/icons";

const Menu = ({ menuItem }) => {
  return (
    <MenuItemeStyled>
      {menuItem.map((item) => {
        return (
          <div className='grid-item' key={item.id}>
            <div className='portfolio-content'>
              <div className='portfolio-img'>
                <img src={item.img} alt='' />
                <ul>
                  <li>
                    <a href={item.link1}>
                      <GitHub />
                    </a>
                  </li>
                  <li>
                    <a href={item.link2}>
                      <Visibility />
                    </a>
                  </li>
                </ul>
              </div>
              <h6>{item.title}</h6>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </MenuItemeStyled>
  );
};

const MenuItemeStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  .grid-item {
    .portfolio-content {
      display: block;
      position: relative;
      overflow: hidden;
      ul {
        transform: translateY(-600px);
        transition: all 0.4s ease-in-out;
        position: absolute;
        left: 50%;
        top: 40%;
        opacity: 0;
        li {
          background-color: var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.7rem;
          border-radius: 50%;
          width: 2.5rem;
          height: 2.5rem;
          margin: 0 0.5rem;
          transition: all 0.4s ease-in-out;
          &:hover {
            background-color: var(--primary-color);
          }
          a {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
      h6 {
        font-size: 1.3rem;
      }
      img {
        width: 100%;
        height: 30vh;
        border-radius: 5px;
        object-fit: cover;
      }
      .portfolio-img {
        &::before {
          content: "";
          position: absolute;
          left: 2%;
          top: 2%;
          border-radius: 5px;
          height: 0;
          width: 0;
          transition: all 0.4s ease-in-out;
        }
      }
      .portfolio-img:hover {
        ul {
          transform: translateY(0);
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease-in-out;
          opacity: 1;
          li {
            transition: all 0.4s ease-in-out;
            &:hover {
              background-color: var(--primary-color);
            }
            a {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          li:hover {
            svg {
              color: var(--white-color);
            }
          }
          svg {
            font-size: 1.4rem;
          }
        }
        &::before {
          height: calc(100% - 36%);
          width: calc(100% - 4%);
          background-color: var(--white-color);
          opacity: 0.9;
          transform-origin: left;
          transition: all 0.4s ease-in-out;
        }
      }
    }
  }
`;

export default Menu;
