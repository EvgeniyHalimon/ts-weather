import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypesSelector } from '../../hooks/useTypesSelector';
import { setQuery, fetchForecast } from '../../store/actions/action-creators';
import { Button, TextField, FormControl, Box}  from '@mui/material';
import  axios  from 'axios';
import { KEY, URL } from "../../constants/constants";
import {useFormik} from 'formik'
import * as yup from 'yup'

export const CityCard : React.FC<{}> = () => {
    const dispatch = useDispatch()
    const {query, forecast} = useTypesSelector(state => state.forecast)

    const handleSubmit = async (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
        dispatch(setQuery('Hello'))
        const forecastData = await axios.get(`${URL}?q=London&units=metric&appid=${KEY}`)
        console.log(forecastData.data);
    }

    // console.log(query);
    // console.log('STANDO',forecast);
    useEffect(() => {
        
    }, [])

    const validationSchema = yup.object({
        city: yup
            .string()
            .required('City is required') 
    })

    const formik = useFormik({
        initialValues: {
            city: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log(values.city)
            dispatch(fetchForecast(values.city))
        },
    })

    return(
        <Box
            className="form"
            onSubmit={formik.handleSubmit}
            component="form"
        >
            <FormControl fullWidth>
                <TextField
                    className='mb-3 form-element'
                    id="city"
                    name="city"
                    label="City"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </FormControl>
        </Box>
    )
}