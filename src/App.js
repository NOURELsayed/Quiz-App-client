import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import React, { useState, useEffect, useCallback } from 'react';
// import updateQuestion from "./actions/updateQuestion";
import {Container } from "react-bootstrap";
import NavbarComponent from "./components/Navbar";
import styled from "styled-components";
// import Login from './components/Login'
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

function App(props) {
  const [Answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const rightAnswerGrade = 2;

  const handleSumbit=(answer,id)=>{
    //setAnswer({...Answer,Answers: answer})
    const isAnswered = Answers.some((answer) => answer.questionId === id);
    if(isAnswered){
      const filterdAnswers = Answers.filter((answer) => answer.questionId !== id);
      setAnswers(filterdAnswers.concat({questionId: id, answer: answer}));
    } else {
      setAnswers(Answers.concat({questionId: id, answer: answer}));
    }
  }
  
  const getCorrectAnswers = () => {
    const correctAnswers = Answers.filter((answer) => {
      const questionRow = props.Questions.find(question => question.id === answer.questionId);
      if(questionRow.answers.indexOf(answer.answer) === questionRow.rightAnswer) return true;
      return false;
    });
    return correctAnswers;
  }

  const getScore = () => {
    const correctAnswersNum =  getCorrectAnswers().length;
    const score = correctAnswersNum * rightAnswerGrade;

    return score;
  };


  useEffect(() => {
    const newScore = getScore();
    setScore(newScore);
  }, [Answers]);
  // console.log(props.question);
  return (
    <Wrapper className="App">
      <h1>{score}</h1>
      <NavbarComponent />
      {props.Questions.map((Question) => (
        <div key={Question.id}>
          <p>{Question.question}</p>
          {Question.answers.map((answer) => (
            <AnswersStyle  onClick={() => handleSumbit(answer,Question.id)}>{answer}</AnswersStyle>
          ))}
        </div>
      ))}
      {/* <button onClick={props.updateQuestion}>Next Question</button> */}
      {/* <Login/> */}
    </Wrapper>
  );
}

const MapStateToProp = (state) => {
  console.log(state);
  const Questions = state.questions;
  return {
    Questions: Questions,
  };
};

// const MapDispatchTOProps = (dispatch) => {
//   return{
//     updateQuestion: ()=> dispatch(updateQuestion)
//   }
// }
export default connect(MapStateToProp)(App);
