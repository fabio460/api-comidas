const mongoose = require('mongoose')
const schema = mongoose.Schema({
                nome:String,
                imagem:String,
                valor:String,
                quantidade:String
            })
exports.model = mongoose.model('carrinho_prato',schema);