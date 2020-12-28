
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import questionlistReducer from '../reducers/questionListReducers';
import { fetcheQuestion } from '../actions/updateQuestion'

const reducer = combineReducers({questions: questionlistReducer});
const store = createStore(reducer, applyMiddleware(thunk));
store.dispatch(fetcheQuestion());
export default store;
