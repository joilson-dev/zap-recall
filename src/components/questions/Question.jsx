import { useState } from "react";
import { StyledQuestions, SetaPlay, CardBack, StyledSetaVirar, AnswerCard, AnswerButton } from "./Questions-styles";
import seta from "/src/assets/seta_play.png";
import seta_virar from "/src/assets/seta_virar.svg";

function Question() {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnswerShown, setIsAnswerShown] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const showAnswer = () => {
        setIsAnswerShown(true);
    };

    return (
        <StyledQuestions isFlipped={isFlipped} >
            {!isFlipped ? (
                <>
                    <p>O que é JSX?</p>
                    <SetaPlay src={seta} onClick={handleFlip} />
                </>
            ) : !isAnswerShown ? (
                <CardBack>
                    <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
                    <StyledSetaVirar>
                        <SetaPlay src={seta_virar} onClick={showAnswer} />
                    </StyledSetaVirar>
                </CardBack>
            ) : (
                <AnswerCard>
                    <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
                    <div>
                        <AnswerButton color="#FF3030">Não lembrei</AnswerButton>
                        <AnswerButton color="#FF922E">Quase não lembrei</AnswerButton>
                        <AnswerButton color="#2FBE34">Zap!</AnswerButton>
                    </div>
                </AnswerCard>
            )
            }
        </StyledQuestions>
    );
}

export default Question;
