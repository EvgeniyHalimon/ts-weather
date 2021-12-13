import { ForecastActionType } from "./actions/action-types"

export type IForecast = {
    query: string,
    forecast: object | null
}

export interface QueryAction {
    type: ForecastActionType.SET_QUERY,
    payload: string
}

export interface ForecastAction {
    type: ForecastActionType.SET_FORECAST,
    payload: object | null
}

export type Action = QueryAction | ForecastAction