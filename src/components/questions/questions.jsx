import { StyledQuestions, SetaPlay, StyledQuestionsContainer } from "./Questions-styles";
import seta from "/src/assets/seta_play.png";

function Questions() {
    return (
        <StyledQuestionsContainer>
            <StyledQuestions>
                <p>pergunta 1</p>
                <SetaPlay src={seta} />
            </StyledQuestions>

            <StyledQuestions>
                pergunta 1
                <SetaPlay src={seta} />
            </StyledQuestions>

            <StyledQuestions>
                <p>pergunta 1</p>
                <SetaPlay src={seta} />
            </StyledQuestions>

            <StyledQuestions>
                pergunta 1
                <SetaPlay src={seta} />
            </StyledQuestions>

            <StyledQuestions>
                <p>pergunta 1</p>
                <SetaPlay src={seta} />
            </StyledQuestions>

            <StyledQuestions>
                pergunta 1
                <SetaPlay src={seta} />
            </StyledQuestions>
        </StyledQuestionsContainer>
    )
}

export default Questions;