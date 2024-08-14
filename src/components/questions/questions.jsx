import { StyledQuestionsContainer } from "./Questions-styles";
import Question from "./Question";
import CARDS from "../../mock";

function Questions({ onAnswer }) {
    return (
        <StyledQuestionsContainer>
            {CARDS.map((card, index) => (
                <Question
                    key={index}
                    title={`Pergunta ${index + 1}`}
                    question={card.question}
                    answer={card.answer}
                    onAnswer={onAnswer}
                />
            ))}
        </StyledQuestionsContainer>
    );
}

export default Questions;