const carsSeedData = [
    {
        plateNo: 'abc123',
        brand: 'bmw',
        color: 'pink'
    },
    {
        plateNo: 'def456',
        brand: 'audi',
        color: 'pink'
    },
    {
        plateNo: 'ghi789',
        brand: 'bmw',
        color: 'lime'
    },
]

const readCars = (filter) => {
    return carsSeedData.filter(car => {
        return Object.keys(filter)
            .map( filterKey => filter[filterKey] === car[filterKey])
            .reduce((acc,cur) => acc && cur, true)
    })
}

const readCarByPlateNo = (plateNo) =>{
   return carsSeedData.find(car => car.plateNo === plateNo)
}

module.exports = {
    readCars, readCarByPlateNo
}
