import Progression from "./components/progression/Progression"

import GlobalStyle from "./global-styles"
import { StyledImage, Container } from "./App-styles"
import Questions from "./components/questions/Questions"

function App() {

  return (
    <>
      <Container>
        <GlobalStyle />
        <StyledImage src=".\src\assets\logo.svg" alt="logo" />
        <Questions />
        <Progression />
      </Container>
    </>
  )
}

export default App
