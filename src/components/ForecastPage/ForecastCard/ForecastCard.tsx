import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch } from "react-redux";
import { useTypesSelector } from '../../../hooks/useTypesSelector';
import { setQuery, fetchForecast } from '../../../store/actions/action-creators';
import '../ForecastCard/ForecastCard.css'

export const ForecastCard : React.FC<{}> = () => {
    const dispatch = useDispatch()
    const {query, forecast} = useTypesSelector(state => state.forecast)

    return (
        <>
        {(forecast !== null) ? 
            <Card sx={{ maxWidth: 345 }} className="card">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        id='icon'
                        image={`http://openweathermap.org/img/wn/${forecast?.weather[0].icon}@2x.png`}
                        alt="icon"
                    />
                    <Typography gutterBottom variant="h5" component="div">
                        JOJO
                    </Typography>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card> : null}
        </>
    );
}



//{forecast !== null ? <img src={`http://openweathermap.org/img/wn/${forecast?.weather[0].icon}@2x.png`} alt="icon" /> : null}