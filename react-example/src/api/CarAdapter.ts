import {Car} from '../types/Car';
import axios from "axios";

interface CarAdapter {
    fetchCars: () => Promise<Car[]>;
}

type CarDataTransferObject = {
    _id: String,
    brand: String,
    color: String
}

class CarAdapterImpl implements CarAdapter{

    fetchCars =  async () => {
        const resp = await axios.get<CarDataTransferObject[]>('/api/cars');
        return resp.data.map(car => {
            return {
                plateNo: car._id,
                brand: car.brand,
                color: car.color
            }
        });
    }
}

const carAdapter = new CarAdapterImpl();
export default carAdapter;
