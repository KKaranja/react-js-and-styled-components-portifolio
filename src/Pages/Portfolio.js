import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import { InnerLayout, MainLayout } from "../styles/Layout";
import portfolios from "../data/portfolios";
import Menu from "../Components/Menu";
import Button from "../Components/Button";

const allButtons = ["All", ...new Set(portfolios.map((item) => item.category))];

const Portfolio = () => {
  const [menuItem, setMenuItems] = useState(portfolios);
  const [button, setButtons] = useState(allButtons);

  const filter = (button) => {
    if (button === "All") {
      setMenuItems(portfolios);
      return;
    }

    const filteredData = portfolios.filter((item) => item.category === button);
    setMenuItems(filteredData);
  };

  return (
    <MainLayout>
      <Title title={"Portfolios"} span={"Portfolios"} />
      <InnerLayout>
        <PortfolioPageStyled>
          <Button filter={filter} button={button} />
          <Menu menuItem={menuItem} />
        </PortfolioPageStyled>
      </InnerLayout>
    </MainLayout>
  );
};

const PortfolioPageStyled = styled.div``;

export default Portfolio;
