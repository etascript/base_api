var express = require('express');
var router = express.Router();
var controller = require('../src/components/receta/controller');
var response = require('../src/helpers/response');

router.get('/', (req, res) => {
    controller.getAll()
    .then((data) => {
        response.success(req, res, data, 200);
    })
    .catch((err) => {
        response.error(req, res, 'Info Inválida', 400, err);
    })
});

router.get('/:id', (req, res) => {
    controller.getOne(req.params.id)
    .then((data) => {
        response.success(req, res, data, 200);
    })
    .catch((err) => {
        response.error(req, res, 'Info Inválida', 400, err);
    })
});

router.post('/add', (req, res) => {
    controller.saveData(req.body)
    .then((data) => {
        response.success(req, res, data, 201);
    })
    .catch((err) => {
        response.error(req, res, 'Info Inválida', 400, err);
    })
});

router.patch('/:id', (req, res) => {
    controller.updateData(req.params.id, req.body)
    .then((data) => {
        response.success(req, res, data, 200);
    })
    .catch((err) => {
        response.error(req, res, 'Info Inválida', 400, err);
    })
});

router.delete('/:id', (req, res) => {
    controller.deleteData(req.params.id)
    .then((data) => {
        response.success(req, res, data, 200);
    })
    .catch((err) => {
        response.error(req, res, 'Info Inválida', 400, err);
    })
});

module.exports = router;