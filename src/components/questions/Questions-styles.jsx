import styled from "styled-components";

export const StyledQuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const StyledQuestions = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
min-height: 65px;
width: 100%;
max-width: 300px;
margin: 0 38px 25px 38px;
  padding-left: ${({ isFlipped }) => (isFlipped ? "0" : "15px")};
  padding-right: ${({ isFlipped }) => (isFlipped ? "0" : "15px")};

background: #FFFFFF;
box-shadow: 0px 4px 5px 0px #00000026;
border-radius: 5px;

font-size: 16px;
font-weight: 700;
line-height: 19.2px;

&:last-child {
    position: relative;
    margin-bottom: 95px;
  }
`;

export const SetaPlay = styled.img`
height: 20px;
`;


export const CardBack = styled.div`
  background: #ffffd4;
  color: #333333;
  border-radius: 5px;
  width: 100%;
  min-height: 131px;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 300px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top:18px;
  padding-bottom: 6px;
`;


export const StyledSetaVirar = styled.div`
display: flex;
justify-content: flex-end;
width: 100%;
height: 100%;
 `;