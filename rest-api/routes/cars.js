const express = require('express');
const validator = require('express-validator');
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
router.get('/:id',
    [validator.param('id').exists().matches(/^[a-z]{3}[0-9]{3}$/),
        (req, res, next)=>{
            const errors = validator.validationResult(req);
            if(!errors.isEmpty()){
                res.status(400).send(errors);
            }
            next();
        },
        controller.fetchCarById])

module.exports = router;
