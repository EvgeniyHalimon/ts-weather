import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch } from "react-redux";
import { useTypesSelector } from '../../../hooks/useTypesSelector';
import { setQuery, fetchForecast } from '../../../store/actions/action-creators';
import '../ForecastCard/ForecastCard.css'

export const ForecastCard : React.FC<{}> = () => {
    const dispatch = useDispatch()
    const {query, forecast, error} = useTypesSelector(state => state.forecast)
    console.log(forecast)
    console.log(error);

    return (
        <>
        {error ? <Alert className='alert' severity="error">Enter correct city name!</Alert> : 
        (forecast !== null) ? 
            <Card 
                sx={{ maxWidth: 220 }} 
                className="card"
                variant="outlined"
            >
                <CardActionArea>
                    <Typography gutterBottom id='city-name' component="div">
                        {forecast.name}, {forecast.sys.country}
                    </Typography>
                    <CardMedia
                        component="img"
                        id='icon'
                        image={`http://openweathermap.org/img/wn/${forecast?.weather[0].icon}@2x.png`}
                        alt="icon"
                    />
                    <CardContent className='card-content'>
                        <Typography variant="body1" color="text.secondary">
                            Temperature: {Math.round(forecast.main.temp)}°C
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Wind speed: {forecast.wind.speed} m/s
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Humidity: {forecast.main.humidity} %
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Pressure: {forecast.main.pressure} milibar
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card> : null}
        </>
    );
}