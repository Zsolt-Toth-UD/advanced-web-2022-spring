import React from 'react';
import {Button} from "@mui/material";
import {fetchCars} from "../store/CarReducer";
import CarDetailedList from "../components/CarDetailedList";
import CarCounter from "../components/CarCounter";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/Store";

const CarManager: React.FunctionComponent = () => {
    const appDispatch = useDispatch<AppDispatch>()
    return (
        <div className="App">
            <Button
                variant={'contained'}
                onClick={() => {
                    appDispatch(fetchCars());
                }}
            >Fetch Cars</Button>
            <CarDetailedList/>
            <CarCounter/>
        </div>
    );
}

export default CarManager;
