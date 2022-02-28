const express = require('express');
const router = express.Router();

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

router.get('/', (req, res) => {
   console.log('cars router!');
   let result = carsSeedData;
   if(req.query.color){
      result = result.filter(car => car.color === req.query.color);
   }
   if(req.query.brand){
      result = result.filter(car => car.brand === req.query.brand);
   }
   res.status(200).send(result);
})

module.exports = router;
