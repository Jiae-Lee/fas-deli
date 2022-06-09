const CONFIG_ARRAY = 'CONFIG_ARRAY'
const SAVED_CONFIG_ARRAY = 'SAVED_CONFIG_ARRAY'

export const configArrayToStore =( data )=>{
    return{
        type: CONFIG_ARRAY,
        payload: data
    }
};

export const savedConfigArray =( data )=>{
    return{
        type: SAVED_CONFIG_ARRAY,
        payload: data
    }
};

const initialState = { };

const adminAction = ( state=initialState, action )=>{
    switch (action.type){
        case CONFIG_ARRAY:
            return {...state, configArray: action.payload }
        case SAVED_CONFIG_ARRAY:
            return {...state, savedConfigArray: action.payload }
        default:
            return state
    }
}

export default adminAction
