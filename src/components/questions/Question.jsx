import { useState } from "react";
import { StyledQuestions, SetaPlay, CardBack, StyledSetaVirar, AnswerCard, AnswerButton } from "./Questions-styles";
import seta from "/src/assets/seta_play.png";
import seta_virar from "/src/assets/seta_virar.svg";
import icone_erro from "/src/assets/icone_erro.png";
import icone_quase from "/src/assets/icone_quase.png";
import icone_certo from "/src/assets/icone_certo.png";

function Question() {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnswerShown, setIsAnswerShown] = useState(false);
    const [answer, setAnswer] = useState(null);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const showAnswer = () => {
        setIsAnswerShown(true);
    };

    const handleAnswer = (selectedAnswer) => {
        setAnswer(selectedAnswer);
        setIsAnswerShown(false);
        setIsFlipped(false);
    };

    return (
        <StyledQuestions isFlipped={isFlipped} answer={answer}>
            {!isFlipped ? (
                <>
                    <p>Pergunta 1</p>


                    {answer ? (
                        <SetaPlay
                            src={
                                answer === "error"
                                    ? icone_erro
                                    : answer === "almost"
                                        ? icone_quase
                                        : icone_certo
                            }
                        />
                    ) : (
                        <SetaPlay src={seta} onClick={handleFlip} />
                    )}
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
                        <AnswerButton color="#FF3030" onClick={() => handleAnswer("error")}>Não lembrei</AnswerButton>
                        <AnswerButton color="#FF922E" onClick={() => handleAnswer("almost")}>Quase não lembrei</AnswerButton>
                        <AnswerButton color="#2FBE34" onClick={() => handleAnswer("zap")}>Zap!</AnswerButton>
                    </div>
                </AnswerCard>
            )}
        </StyledQuestions>
    );
}

export default Question;