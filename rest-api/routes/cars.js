const express = require('express');
const router = express.Router();
const controller = require('../controllers/carController')

/**
 * @swagger
 * /api/cars:
 *  get:
 *      summary: GET all cars
 *      parameters:
 *          -   name: color
 *              in: query
 *              type: string
 *              required: false
 *          -   name: brand
 *              in: query
 *              type: string
 *              required: false
 *      responses:
 *          200:
 *              description: OK
 */
router.get('/', controller.fetchCars)

/**
 * @swagger
 * /api/cars/{id}:
 *  get:
 *      summary: get a single car by plate number
 *      parameters:
 *          -   name: id
 *              in: path
 *              type: string
 *              required: true
 *      responses:
 *          200:
 *              description: OK
 */
router.get('/:id', controller.fetchCarById)

module.exports = router;
