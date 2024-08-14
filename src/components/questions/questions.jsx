import { StyledQuestionsContainer } from "./Questions-styles";
import Question from "./Question";

function Questions() {
    return (
        <StyledQuestionsContainer>
            <Question />
            <Question />
        </StyledQuestionsContainer>
    );
}

export default Questions;