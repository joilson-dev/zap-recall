import styled from "styled-components";

export const StyledQuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledQuestions = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 65px;
width: 100%;
max-width: 300px;
margin: 0 38px 25px 38px;
padding-left: 15px;
padding-right: 15px;

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