import React, {useEffect, useState} from "react";
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import axios from "axios";
import {Car} from "../types/Car";

const CarDetailedList: React.FunctionComponent = () => {

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
    return (
        <TableRow>
            <TableCell>{plateNo}</TableCell>
            <TableCell>{brand}</TableCell>
            <TableCell>{color}</TableCell>
        </TableRow>
    )
}

export default CarDetailedList;
