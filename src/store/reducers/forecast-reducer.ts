import { ForecastActionType } from "../actions/action-types"
import { Action, IForecast } from "../type"

const initialState: IForecast = {
    query: '',
    forecast: null
}

const updateForecast = (state: IForecast = initialState, action: Action) => {
    switch (action.type){
        case ForecastActionType.SET_QUERY :
            return{
                ...state,
                query: action.payload
            }
        case ForecastActionType.SET_FORECAST:
            return {
                ...state,
                forecast : action.payload
            }
        default:
            return state
    }
}

export default updateForecast