import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Car} from "../types/Car";
import axios from "axios";
import carAdapter from "../api/CarAdapter";
import {useDispatch} from "react-redux";
import {AppDispatch} from "./Store";

const initialState: Car[] = [];

export const fetchCars = createAsyncThunk('cars/fetchAll', async () => {
    return await carAdapter.fetchCars()
});

export const deleteCar = createAsyncThunk('cars/delete', async (plateNo: String) => {
   await carAdapter.deleteCar(plateNo);
   deleteCarByPlateNo(plateNo);
   return plateNo;
});


export const carSlice = createSlice({
    name: 'cars',
    initialState: {
        cars: initialState
    },
    reducers: {
        refreshCars: (state, action: PayloadAction<Car[]>) => {
            state.cars = [...action.payload];
        },
        deleteCarByPlateNo: (state, action: PayloadAction<String>) => {
            state.cars = [...state.cars.filter((car) => car.plateNo !== action.payload)];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCars.fulfilled, (state, action: PayloadAction<Car[]>) => {
            state.cars = [...action.payload];
        });
        builder.addCase(deleteCar.fulfilled, (state, action: PayloadAction<String>) => {
            deleteCarByPlateNo(action.payload);
        })
    }
});

export const {refreshCars, deleteCarByPlateNo} = carSlice.actions;
export default carSlice.reducer;
