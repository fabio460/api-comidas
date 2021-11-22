const express = require('express')
require('dotenv').config()
const Porta = process.env.Porta || 3001
const cors = require('cors')
const app = express()
const rota = require('./rotas')
const conexao = require('./conexao')
conexao()
app.use(cors())
app.use(rota)
app.use(express.json())
app.listen(Porta,()=>console.log('servidor rodando'))