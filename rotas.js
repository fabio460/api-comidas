const rota = require('express').Router();
const multer = require('multer');
const configMulter = require('./configMulter')
const controllerProduto = require('./controllers/controllerProduto')
const controllerCarrinho = require('./controllers/controllerCarrinho')
rota.get('/listar',controllerProduto.listar)
rota.post('/inserir',multer(configMulter).single(),controllerProduto.inserir)

rota.get('/listarCar',controllerCarrinho.listarCarrinho)
rota.post('/inserirCar',multer(configMulter).single(),controllerCarrinho.inserirCarrinho)
rota.delete('/deletarCar/:id',multer(configMulter).single(),controllerCarrinho.deletarCarrinho)
rota.put('/alterarCar/:id',multer(configMulter).single(),controllerCarrinho.alterarCarrinho)
module.exports = rota