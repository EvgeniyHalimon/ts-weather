import React from "react";
import { useDispatch } from "react-redux";
import { Button, TextField, FormControl, Box, Container}  from '@mui/material';
import {useFormik} from 'formik'
import * as yup from 'yup'
import '../ForecastForm/ForecastForm.css'
import { useTypesSelector } from '../../../hooks/useTypesSelector';
import { fetchForecast, setQuery } from "../../../store/actions/action-creators";

export const ForecastForm : React.FC<{}> = () => {
    const dispatch = useDispatch()
    const {query, forecast} = useTypesSelector(state => state.forecast)

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
            dispatch(setQuery(values.city))
            dispatch(fetchForecast(values.city))
        },
    })

    return(
        <Container maxWidth="sm">
            <Box
                className="form"
                onSubmit={formik.handleSubmit}
                component="form"
            >
                <FormControl fullWidth>
                    <TextField
                        className='form-element'
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
        </Container>
    )
}