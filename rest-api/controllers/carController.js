const service = require('../services/carManagerService')

const fetchCars = (req, res) => {
    service.readCars(req.query)
        .then(cars => {
            res.status(200).send(cars);
        })
        .catch(error => {
            res.status(500).send(error.message);
        })
}

const fetchCarById = (req,res)=>{
    service.readCarByPlateNo(req.params.id)
        .then(car => {
            if(!car){
                res.status(404).send(`Car Not Found: PlateNo: ${req.params.id}`);
                return;
            }
            res.status(200).send(car);
        })
        .catch(error => {
            res.status(500).send(error.message);
        })
}
module.exports = {
    fetchCars,
    fetchCarById
}
