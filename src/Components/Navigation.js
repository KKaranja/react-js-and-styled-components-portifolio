import React from "react";
import styled from "styled-components";
import avatar from "../img/Isaac Karanja Kimura.jpg";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <NavigationStyled>
      <Avatar>
        <Img
          src={avatar}
          alt='Isaac karanja kimura, experienced web developer and SEO Expert'
        />
      </Avatar>
      <NavItems>
        <NavItem>
          <NavLink to='/' activeClassName='active-class' exact>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/about' activeClassName='active-class' exact>
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/resume' activeClassName='active-class' exact>
            Resume
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/portfolio' activeClassName='active-class' exact>
            Portfolios
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/blog' activeClassName='active-class' exact>
            Blogs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/contact' activeClassName='active-class' exact>
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
  height: 100%;
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
    background-color: var(--primary-color);
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
      background-color: var(--primary-color);
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
