
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import questionlistReducer from '../reducers/questionListReducers';
import { fetcheQuestion } from '../actions/updateQuestion'

const reducer = combineReducers({questions: questionlistReducer});
const initialState = {
// questions: {name: "TERMINATOR 2"}
    // questions: questionlistReducer
// questions:[
//     {id:1, question:"'OS' computer abbreviation usually means?", answers: ["Order of Significance","Open Software","Operating System","Optical Sensor"],rightAnswer:2},
//     {id:2, question:"What is part of a database that holds only one type of information?",answers: ["Report","Field","Record","File"] ,rightAnswer:1},
//     {id:3, question:"What is The capital of Egypt?", answers: ["cairo" , "Giza","Alex","Naser city"],rightAnswer:0},
//     {id:4, question:"Grand Central Terminal, Park Avenue, New York is the world's",answers: ["largest railway station", "highest railway station", "longest railway station","None of the above"], rightAnswer:1},
//     {id:5, question:"What is the capital and largest city of Egypt?", answers:["cairo","Giza","Alex","Aswan"],rightAnswer:0}
// ]  

};
// const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(reducer, applyMiddleware(thunk));
store.dispatch(fetcheQuestion());
export default store;
