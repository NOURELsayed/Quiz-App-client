import {UPDATE_QUESTION} from '../actions/updateQuestion';
const questionReducer = (state={}, {type,payload}) =>{
    switch(type){
        case UPDATE_QUESTION:
            return payload
            default:
        return state        
    }
}
export default questionReducer;