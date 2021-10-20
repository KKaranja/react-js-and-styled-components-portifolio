import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <Container>
      <Navigation />
    </Container>
  );
};

const Container = styled.div`
  width: 16.3rem;
  position: fixed;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
`;

export default Sidebar;
