import Progression from "/src/components/progression/Progression"

import GlobalStyle from "./global-styles"
import { StyledImage, Container } from "./App-styles"
import Questions from "/src/components/questions/Questions"
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
        <StyledImage src={logo} alt="logo" />
        <Questions onAnswer={handleAnswerUpdate} />
        <Progression completed={completedCount} total={CARDS.length} />
      </Container>
    </>
  )
}

export default App
