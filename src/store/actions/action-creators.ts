import axios from "axios"
import { Dispatch } from "redux"
import { KEY, URL } from "../../constants/constants"
import { Action } from "../type"
import { ForecastActionType } from "./action-types"

export const setQuery = (str: string) => {
    return{
        type: ForecastActionType.SET_QUERY,
        payload: str
    }
}

export const setForecast = (obj: object) => {
    return{
        type: ForecastActionType.SET_FORECAST,
        payload: obj
    }
}

export const setError = (bool: boolean) => {
    return{
        type: ForecastActionType.SET_ERROR,
        payload: bool
    }
}

export const fetchForecast = (query: string) => {
    return async(dispatch: Dispatch) => {
        try{
            const forecastData = await axios.get(`${URL}?q=${query}&units=metric&appid=${KEY}`)
            dispatch(setForecast(forecastData.data))
            dispatch(setError(false))
        } catch(err){
            console.log(err);
            dispatch(setError(true))
        }
    }
}