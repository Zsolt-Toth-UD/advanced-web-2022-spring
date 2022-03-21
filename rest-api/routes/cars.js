const express = require('express');
const router = express.Router();
const controller = require('../controllers/carController')

router.get('/', controller.fetchCars)

router.get('/:id', controller.fetchCarById)

module.exports = router;
