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

export const fetchForecast = (query: string) => {
    return async(dispatch: Dispatch) => {
        try{
            const forecastData = await axios.get(`${URL}?q=${query}&units=metric&appid=${KEY}`)
            console.log(forecastData.data);
            dispatch(setForecast(forecastData.data))
        } catch(err){
            console.log(err);
        }
    }
}