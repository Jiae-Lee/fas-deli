import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

import adminAction from './adminAction';

const reducer =(state,action)=> {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload
        };
    }
    return combineReducers({
        adminAction
    })(state,action)
}
export default reducer;
