import Progression from "./components/progression/Progression"

import GlobalStyle from "./global-styles"
import { StyledImage, Container } from "./App-styles"
import Questions from "./components/questions/Questions"
import { useState } from "react";
import CARDS from "./mock";

function App() {

  const [completedCount, setCompletedCount] = useState(0);

  const handleAnswerUpdate = () => {
    setCompletedCount(prevCount => prevCount + 1);
  };

  console.log(completedCount)
  console.log(CARDS.length)
  return (
    <>
      <Container>
        <GlobalStyle />
        <StyledImage src=".\src\assets\logo.svg" alt="logo" />
        <Questions onAnswer={handleAnswerUpdate} />
        <Progression completed={completedCount} total={CARDS.length} />
      </Container>
    </>
  )
}

export default App
