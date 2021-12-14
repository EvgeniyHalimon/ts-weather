import { ForecastActionType } from "./actions/action-types"

export type IForecast = {
    query: string,
    forecast:  Object<string | number> | null
}

export interface QueryAction {
    type: ForecastActionType.SET_QUERY,
    payload: string
}

export interface ForecastAction {
    type: ForecastActionType.SET_FORECAST,
    payload:  Object<string | number>
}

export type Action = QueryAction | ForecastAction