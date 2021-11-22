const mongoose = require('mongoose');
const model = mongoose.Schema({
                nome:String,
                imagem:String,
                peso:String,
                descricao:String,
                ingredientes:String,
                valor:String
            })
module.exports = mongoose.model('prato',model)