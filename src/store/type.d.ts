import { ForecastActionType } from "./actions/action-types"

export type IForecast = {
    query: string,
    forecast:  Object<string | number> | null
    error: boolean
}

export interface QueryAction {
    type: ForecastActionType.SET_QUERY,
    payload: string
}

export interface ForecastAction {
    type: ForecastActionType.SET_FORECAST,
    payload:  Object<string | number>
}

export interface ErrorAction {
    type: ForecastActionType.SET_ERROR,
    payload: boolean 
}

export type Action = QueryAction | ForecastAction | ErrorAction