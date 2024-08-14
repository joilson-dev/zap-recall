import { useState } from "react";
import { StyledQuestions, SetaPlay, CardBack, StyledSetaVirar } from "./Questions-styles";
import seta from "/src/assets/seta_play.png";
import seta_virar from "/src/assets/seta_virar.svg";

function Question() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = (e) => {
        setIsFlipped(!isFlipped);
    };
    return (
        <StyledQuestions isFlipped={isFlipped} >
            {!isFlipped ? (
                <>
                    <p>O que é JSX?</p>
                    <SetaPlay src={seta} onClick={handleFlip} />
                </>
            ) : (
                <CardBack>
                    <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
                    <StyledSetaVirar>
                        <SetaPlay src={seta_virar} onClick={handleFlip} />
                    </StyledSetaVirar>
                </CardBack>
            )}
        </StyledQuestions>
    );
}

export default Question;
