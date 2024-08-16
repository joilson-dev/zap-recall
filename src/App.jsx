import { Progression } from "components/progression/Progression.jsx";
import GlobalStyle from "./global-styles"
import { StyledImage, Container } from "./App-styles"
import Questions from "./components/questions/Questions"
import { useState } from "react";
import CARDS from "./mock";
import logo from './assets/logo.svg';

function App() {

  const [completedCount, setCompletedCount] = useState(0);

  const handleAnswerUpdate = () => {
    setCompletedCount(prevCount => prevCount + 1);
  };

  return (
    <>
      <Container>
        <GlobalStyle />
        <StyledImage src={logo} alt="logoo" />
        <Questions onAnswer={handleAnswerUpdate} />
        <Progression completed={completedCount} total={CARDS.length} />
      </Container>
    </>
  )
}

export default App
