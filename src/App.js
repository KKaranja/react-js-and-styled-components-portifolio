import { Route, Switch } from "react-router";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";

function App() {
  return (
    <Container>
      <Sidebar />
      <MainContentStyled>
        <Lines>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
        </Lines>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/blog'>
            <Blog />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/resume'>
            <Resume />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
        </Switch>
      </MainContentStyled>
    </Container>
  );
}

const Container = styled.div``;

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
`;

const Lines = styled.div`
  position: absolute;
  min-height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  z-index: -1;
`;

const Line = styled.div`
  width: 1px;
  min-height: 100vh;
  /* background-color: var(--border-color); */
  background-color: #1f2334;
`;

export default App;
