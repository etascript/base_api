var express = require('express');
var router = express.Router();
var controller = require('../src/components/usuario/controller');
var response = require('../src/helpers/response');
var authController = require('../src/components/auth/controller');

router.get('/', (req, res) =>{
    controller.getAll()
    .then((data) => {
        response.success(req, res, data, 200);
    })
    .catch((err) => {
        response.error(req, res, 'Info Inválida', 400, err);
    })
});

router.get('/:id', (req, res) =>{
    controller.getOne(req.params.id)
    .then((data) => {
        response.success(req, res, data, 200);
    })
    .catch((err) => {
        response.error(req, res, 'Info Inválida', 400, err);
    })
});


router.post('/registro', (req, res) =>{
    const {body} = req;
    controller.saveData(body)
    .then((data) => {
        response.success(req, res, data, 201);
    })
    .catch((err) => {
        response.error(req, res, 'Info Inválida', 400, err);
    })
});

router.patch('/:id', (req, res) =>{
    const {body} = req;
    controller.updateData(req.params.id, body)
    .then((data) => {
        response.success(req, res, data, 200);
    })
    .catch((err) => {
        response.error(req, res, 'Info Inválida', 400, err);
    })
});

router.delete('/:id', (req, res) =>{
    controller.deleteData(req.params.id)
    .then((data) => {
        response.success(req, res, data, 200);
    })
    .catch((err) => {
        response.error(req, res, 'Info Inválida', 400, err);
    })
});

router.post('/login', (req, res) =>{
    let username = req.body.username;
    let pass = req.body.password;
    authController.login(username, pass)
    .then((data) => {
        response.success(req, res, data, 200);
    })
    .catch((err) => {
        response.error(req, res, 'Info Inválida', 400, err);
    })
});

module.exports = router;