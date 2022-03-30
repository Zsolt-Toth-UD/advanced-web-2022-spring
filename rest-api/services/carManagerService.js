const carRepo = require('../persist/mongo/CarModel');

const readCars = (filter) => {
    return new Promise(((resolve, reject) => {
        carRepo.find().then( cars => {
            resolve(cars.filter(car => {
                return Object.keys(filter)
                    .map( filterKey => filter[filterKey] === car[filterKey])
                    .reduce((acc,cur) => acc && cur, true)
            }) )
        })
            .catch(error => {
                reject(error);
            })
    }));
}

const readCarByPlateNo = (plateNo) =>{
    return new Promise(((resolve, reject) => {
        carRepo.findById(plateNo)
            .then(car => {
                resolve(car);
            })
            .catch(error => {
               reject(error);
            });
    }))
}

module.exports = {
    readCars, readCarByPlateNo
}
