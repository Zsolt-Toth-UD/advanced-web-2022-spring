import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Car} from "../types/Car";
import axios from "axios";
import carAdapter from "../api/CarAdapter";

const initialState: Car[] = [];

export const fetchCars = createAsyncThunk('cars/fetchAll', async () => {
    return await carAdapter.fetchCars()
});


export const carSlice = createSlice({
    name: 'cars',
    initialState: {
        cars: initialState
    },
    reducers: {
        refreshCars: (state, action: PayloadAction<Car[]>) => {
            state.cars = [...action.payload];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCars.fulfilled, (state, action: PayloadAction<Car[]>) => {
            state.cars = [...action.payload];
        })
    }
});

export const {refreshCars} = carSlice.actions;
export default carSlice.reducer;
