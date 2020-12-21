import axios from 'axios';
import {ADD_FETCHED_DATA } from './actionstype'
// export const UPDATE_QUESTION ="UPDATE_QUESTION";

// const updateQuestion ={
//     type: UPDATE_QUESTION,
//     payload: "The new question" 
// };
// export const fetcheQuestion={
//     // type: ADD_FETCHED_DATA ,
//     payload: "The new question" 
// };

const apiUrl = 'http://localhost:3000/Questions';
export const fetcheQuestion = () => {
    console.log("questionaction")

    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                console.log("ressss",response.data)
                return response.data
            })
            .then(data => {
                dispatch({
                    type: ADD_FETCHED_DATA,
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
};
export default fetcheQuestion;