import { SET_FORECAST } from "../actions/action-types"
import { SET_QUERY } from '../actions/action-types';

const initialState = {
    query: '',
    forecast: {}
}

const updateForecast = (state = initialState, action) => {
    switch (action.type){
        case SET_QUERY :
            return{
                ...state
                query: action.payload
            }
        case SET_FORECAST:
            return {
                ...state
                forecast : action.payload
            }
        default:
            return state
    }
}

export default updateForecast