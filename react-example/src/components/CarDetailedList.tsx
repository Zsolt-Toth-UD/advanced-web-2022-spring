import React, {useState} from "react";
import {Button, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {Car} from "../types/Car";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/Store";
import {Delete} from "@mui/icons-material";
import {deleteCarByPlateNo} from "../store/CarReducer";

const CarDetailedList: React.FunctionComponent = () => {

    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

    const cars = useAppSelector(state => state.carReducer.cars);

    return (
        <Table>
            <TableHead>
                <TableCell>
                    PlateNo
                </TableCell>
                <TableCell>
                    Brand
                </TableCell>
                <TableCell>
                    Color
                </TableCell>
            </TableHead>
            <TableBody>
                {
                    cars.map(car => {
                        return(<CarDetailedListItem plateNo={car.plateNo} brand={car.brand} color={car.color}/>);
                    })
                }
            </TableBody>
        </Table>
    );
}

const CarDetailedListItem: React.FunctionComponent<Car> = ({plateNo, brand, color}) => {

    const appDispatch = useDispatch<AppDispatch>()

    return (
        <TableRow>
            <TableCell>
                <Button onClick={()=> {
                    appDispatch(deleteCarByPlateNo(plateNo))
                }}><Delete/></Button>
                {plateNo}
                </TableCell>
            <TableCell>{brand}</TableCell>
            <TableCell>{color}</TableCell>
        </TableRow>
    )
}

export default CarDetailedList;
