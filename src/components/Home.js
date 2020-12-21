
import { connect } from "react-redux";
import React, { useState, useEffect } from 'react';
import fetcheQuestion from "../actions/updateQuestion";
import {Container } from "react-bootstrap";
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

  const handleSumbit=(answer,id)=>{
    //setAnswer({...Answer,Answers: answer})
    debugger
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
    console.log("correctAnswers",correctAnswers)
    return correctAnswers;
  }

  const getScore = () => {
    const correctAnswersNum =  getCorrectAnswers().length;
    console.log("getScore",correctAnswersNum)
    const score = correctAnswersNum * rightAnswerGrade;
    console.log("getScore",score)

    return score;
  };


  useEffect(() => {
    const newScore = getScore();
    setScore(newScore);
    console.log("state score",score)
  }, [Answers]);
  // console.log(props.question);
  return (
    <Wrapper className="App">
    {/* <button onClick={props.fetcheQuestion}>Next Question</button> */}

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
    </Wrapper>
  );
}

const MapStateToProp = (state) => {
  console.log("MapStateToProp state",state);
  const Questions = state.questions;
  return {
    Questions: Questions,
  };
};

// const MapDispatchTOProps = (dispatch) => {
//   return{
//     ADD_FETCHED_DATA : ()=> dispatch(fetcheQuestion)
//   }
// }
export default connect(MapStateToProp)(Home);
