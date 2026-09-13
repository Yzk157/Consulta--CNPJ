const express = require('express');
const router = express.Router();
const path = require('path');
const { fetchCNPJ, fetchNumber } = require('../validator/API');

const baseIndex = path.join(__dirname, '../public/consulta.html');

router.get('/', (req, res) => {
    res.sendFile(baseIndex);
});

router.post('/', (req, res, next) => {
    if (req.body.tipo === 'cnpj') {
        return fetchCNPJ(req, res, next);
    }

    if (req.body.tipo === 'numero') {
        return fetchNumber(req, res, next);
    }

    return res.status(400).send('Tipo de consulta inválido');
});

module.exports = router;

