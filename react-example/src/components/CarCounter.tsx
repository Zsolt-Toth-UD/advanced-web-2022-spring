import React, {useEffect, useState} from "react";
import {Typography} from "@mui/material";
import axios from "axios";
import {Car} from "../types/Car";

const CarCounter: React.FunctionComponent = () =>{

    const [cars, setCars] = useState<Car[]>([])

    useEffect(()=> {
        const fetchCars = async () => {
            const resp = await axios.get('/api/cars')
            console.log({resp});
            setCars(resp.data.map(car => {return {...car, plateNo: car._id}}))
        }
        fetchCars();
    }, [])

    return (
        <Typography>
            There are {cars.length} cars in the shop!
        </Typography>
    );
}

export default CarCounter;
