import React, {useEffect, useState} from "react";
import {Typography} from "@mui/material";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/Store";
import {Car} from "../types/Car";

const CarCounter: React.FunctionComponent = () =>{

    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

    const cars = useAppSelector(state => state.carReducer.cars);
    return (
        <Typography>
            There are {cars.length} cars in the shop!
        </Typography>
    );
}

export default CarCounter;
