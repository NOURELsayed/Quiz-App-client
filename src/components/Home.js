import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import fetcheQuestion from "../actions/updateQuestion";
import { Container } from "react-bootstrap";
import NavbarComponent from "./Navbar";
import styled from "styled-components";
const Wrapper = styled(Container)`
  padding-top: 20px;
  width: 70%;
  background-color: f9f8fd;
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px #888888;
`;
const AnswersStyle = styled.div`
margin: auto;
margin-bottom: 20px;
width: 50%;
margin-top: 30px;
padding: 10px 10px;
border-radius: 10px;
outline: none;
color: black;
border: none;
border-left: -11.5px solid #ffffff1a;
cursor: pointer;
box-shadow: 13px 10px 15px 0px #0000008c;
transition: all 0.4s ease-in-out;;
}
`;

function Home(props) {
  const [Answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const rightAnswerGrade = 2;
  const handleSumbit = (answer, id) => {
    //when user choose his answer, th answer will be added in the Answers state
    //then we make loop inside this state to check if the answer id is here or not
    const isAnswered = Answers.some((answer) => answer.questionId === id);

    const newAnswer = { questionId: id, answer: answer };
    let currAnswers = Answers;
    //here is check when user choose his answer and rewrite ather one after some time so we here check if there is answes or not
    //if yes so we will exchange the old one with the new one
    if (isAnswered){
      currAnswers = Answers.filter((answer) => answer.questionId !== id);
    }

    setAnswers([...currAnswers, newAnswer]);
  };

  const getCorrectAnswers = () => {
    // search in the Answers state while the question props fetched so we are searching inside it if the answer that user choose is equal the question id (the question that related to the answer)
    const correctAnswers = Answers.filter((answer) => {
      const questionRow = props.Questions.find((question) => question._id === answer.questionId);

      if (questionRow.answers.indexOf(answer.answer) === questionRow.rightAnswer)
        return true; //if the condition is right so the new array that filter will return it will be included the right answer that the user write it 

      return false; // if the condition is false so the answer is not the right one and will not be at the new array that the fulter will return it 
    });
    return correctAnswers;
  };

  const getScore = () => {
    const correctAnswersNum = getCorrectAnswers().length;
    const score = correctAnswersNum * rightAnswerGrade;
    return score;
  };

  useEffect(() => {
    const newScore = getScore();
    setScore(newScore);
  }, [Answers]);
  return (
    <Wrapper className="App">
      {/* <button onClick={props.fetcheQuestion}>Next Question</button> */}

      <h1>{score}</h1>
      <NavbarComponent />
      {props.Questions.map((Question) => (
        <div key={Question._id}>
          <p>{Question.question}</p>
          {Question.answers.map((answer, i) => (
            <AnswersStyle
              key={i}
              onClick={() => handleSumbit(answer, Question._id)}
            >
              {answer}
            </AnswersStyle>
          ))}
        </div>
      ))}
    </Wrapper>
  );
}

const MapStateToProp = (state) => ({
  Questions: state.questions,
});

// const MapDispatchTOProps = (dispatch) => {
//   return{
//     ADD_FETCHED_DATA : ()=> dispatch(fetcheQuestion)
//   }
// }
export default connect(MapStateToProp)(Home);
