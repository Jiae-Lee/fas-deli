const HISTORY = 'HISTORY'
const MERGE_HISTORY = 'MERGE_HISTORY'
const SAVED_HISTORY = 'SAVED_HISTORY'
const WALKSTEP = 'WALKSTEP'

export const historyToStore =( data )=>{
    return{
        type: HISTORY,
        payload: data
    }
};

export const mergeHistoryToStore =( data )=>{
    return{
        type: MERGE_HISTORY,
        payload: data
    }
};

export const savedHistory =( data )=>{
    return{
        type: SAVED_HISTORY,
        payload: data
    }
};

export const walkStepToStore =( data )=>{
    return{
        type: WALKSTEP,
        payload: data
    }
};

const initialState = { };

const adminAction = ( state=initialState, action )=>{
    switch (action.type){
        case HISTORY:
            return {...state, historyToStore: action.payload }
        case MERGE_HISTORY:
            return {...state, mergeHistoryToStore: action.payload }
        case SAVED_HISTORY:
            return {...state, savedHistory: action.payload }
        case WALKSTEP:
            return {...state, walkStepToStore: action.payload }
        default:
            return state
    }
}

export default adminAction
