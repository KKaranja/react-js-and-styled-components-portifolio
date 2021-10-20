import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Pages/HomePage";

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
        <HomePage />
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
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Line = styled.div`
  width: 0.1rem;
  min-height: 100vh;
  background-color: var(--border-color);
`;

export default App;
