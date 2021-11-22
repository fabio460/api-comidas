const rota = require('express').Router();
const multer = require('multer');
const configMulter = require('./configMulter')
const controllerProduto = require('./controllers/controllerProduto')
rota.get('/listar',controllerProduto.listar)

rota.post('/inserir',multer(configMulter).single(),controllerProduto.inserir)

module.exports = rota