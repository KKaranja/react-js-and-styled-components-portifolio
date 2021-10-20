import React from "react";
import styled from "styled-components";
import avatar from "../img/my-img-2.jpg";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <NavigationStyled>
      <Avatar>
        <Img src={avatar} alt='' />
      </Avatar>
      <NavItems>
        <NavItem>
          <NavLink to='/home' activeClassName='active-class'>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/about' activeClassName='active-class'>
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/resume' activeClassName='active-class'>
            Resume
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/portfolios' activeClassName='active-class'>
            Portfolios
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/blogs' activeClassName='active-class'>
            Blogs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/contact' activeClassName='active-class'>
            Contact
          </NavLink>
        </NavItem>
      </NavItems>
      <Footer>
        <FooterParagraph>@2021 Isaac Kimura Portfolio</FooterParagraph>
      </Footer>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);
`;

const Avatar = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  text-align: center;
  padding: 1rem 0;
`;

const Img = styled.img`
  width: 65%;
  border-radius: 50%;
  object-fit: cover;
  border: 8px solid var(--border-color);
`;

const NavItems = styled.ul`
  width: 100%;
  text-align: center;
`;

const NavItem = styled.li`
  display: block;
  .active-class {
    background-color: var(--primary-clor);
  }
  a {
    display: block;
    padding: 0.45rem 0;
    position: relative;
    z-index: 10;
    text-transform: uppercase;
    transition: all 0.4s ease-in-out;
    font-weight: 600;
    letter-spacing: 1px;
    &:hover {
      cursor: pointer;
    }
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 50%;
      background-color: var(--primary-clor);
      transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
      z-index: 3;
      opacity: 0.21;
      transform-origin: bottom;
    }
  }
  a:hover::before {
    width: 100%;
    height: 100%;
  }
`;

const Footer = styled.footer`
  border-top: 1px solid var(--border-color);
  width: 100%;
`;

const FooterParagraph = styled.p`
  padding: 2rem 0;
  font-size: 0.8rem;
  display: block;
  text-align: center;
`;

export default Navigation;
