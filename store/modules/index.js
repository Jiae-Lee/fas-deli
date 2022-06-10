import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import undoable from 'redux-undo'
import adminAction from './adminAction';

const reducer =(state,action)=> {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload
        };
    }

    return combineReducers({
        adminAction:undoable(adminAction)
    })(state,action)
}
export default reducer;
