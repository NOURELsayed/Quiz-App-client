// import {ADD_FETCHED_DATA } from '../actions/actionstype';
// const questionReducer = (state=[], {type,payload}) =>{
//     switch(type){
//         case ADD_FETCHED_DATA :
//             return [...payload]
//             default:
//         return state        
//     }
// }
// export default questionReducer;

import {ADD_FETCHED_DATA } from '../actions/actionstype';

export default function questionReducer(state = [], action) {
    switch (action.type) {

        case ADD_FETCHED_DATA:
            return [ ...action.payload];
        default:
            return state;
    }
}