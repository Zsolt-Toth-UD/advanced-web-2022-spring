const service = require('../services/carManagerService')

const fetchCars = (req, res) => {
    res.status(200).send(service.readCars(req.query));
}

const fetchCarById = (req,res)=>{
    const car = service.readCarByPlateNo(req.params.id)
    if(!car){
        res.status(404).send(`Car Not Found! PlateNo: ${req.params.id}`);
        return;
    }
    res.status(200).send(car);


}
module.exports = {
    fetchCars,
    fetchCarById
}
