import React from "react";
import { ForecastCard } from "./ForecastCard/ForecastCard";
import { ForecastForm } from './ForecastForm/ForecastForm';

export const ForecastPage : React.FC<{}> = () => {
    return(
        <>
            <ForecastForm/>
            <ForecastCard/>
        </>
    )
}