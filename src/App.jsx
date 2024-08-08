import Progression from "./components/progression/progression"
import Questions from "./components/questions/questions"

import GlobalStyle from "./global-styles"
import { StyledImage,Container } from "./App-styles"

function App() {

  return (
    <>
    <Container>
    <GlobalStyle/>
    <StyledImage src=".\src\assets\logo.svg" alt="logo" />
    <Questions/>
    <Progression/>
    </Container>
    </>
  )
}

export default App
