import React from "react";
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";

//TODO: Replace with axios call and useEffect
const cars = [
    {
        "plateNo": "abc123",
        "brand": "bmw",
        "color": "pink"
    },
    {
        "plateNo": "def456",
        "brand": "bmw",
        "color": "pink"
    },
    {
        "plateNo": "ghi789",
        "brand": "bmw",
        "color": "pink"
    }
];

const CarDetailedList: React.FunctionComponent = () => {
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
type CarDetailedListItemProps = {
    plateNo: String,
    brand: String,
    color: String
};

const CarDetailedListItem: React.FunctionComponent<CarDetailedListItemProps> = ({plateNo, brand, color}) => {
    return (
        <TableRow>
            <TableCell>{plateNo}</TableCell>
            <TableCell>{brand}</TableCell>
            <TableCell>{color}</TableCell>
        </TableRow>
    )
}

export default CarDetailedList;
