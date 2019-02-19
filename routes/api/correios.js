const express = require('express');
const Correios = require('node-correios');
const router = express.Router();
const correios = new Correios();

/**
 * @route       /api/correios/
 * @description Hello world for testing purposes
 * @access      public
 */
router.get('/', (req, res) => {
    res.status(200).send({msg: 'correios works!'});
});

/**
 * @route       /api/correios/calculate
 * @description Return address by postal code and calculate the income
 * @access      public
 */
router.post('/calculate', (req, res) => {
    let response = {};
    let errors = {};

    correios.consultaCEP({cep: req.body.cep})
        .then(result => {
            response.name = req.body.name;
            response.address = result;
            response.percapita = parseFloat(req.body.income) / parseFloat(req.body.people);
            res.status(200).send(response);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

module.exports = router;