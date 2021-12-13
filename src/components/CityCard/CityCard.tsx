import React from "react";
import { useTypesSelector } from '../../hooks/useTypesSelector';

export const CityCard : React.FC<{}> = () => {
    const {query, forecast} = useTypesSelector(state => state.forecast)

    return(
        <h1>City card</h1>
    )
}