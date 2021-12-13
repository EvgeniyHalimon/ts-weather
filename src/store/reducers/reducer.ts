import { combineReducers } from "redux";
import updateForecast from "./forecast-reducer";

const reducer = combineReducers({
    forecast : updateForecast
})

export default reducer

export type RootState = ReturnType<typeof reducer>