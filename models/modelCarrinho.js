const mongoose = require('mongoose')
const schema = mongoose.Schema({
                nome:String,
                imagem:String,
                valor:String,
                quantidade:String
            })
module.exports = mongoose.model('carrinho_prato',schema);