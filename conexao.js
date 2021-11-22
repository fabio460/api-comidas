
require('dotenv').config()
module.exports = ()=>{
    const mongoose = require('mongoose');
    mongoose.connect(process.env.URL_DATA,{
        useNewUrlParser:true
    })
    const db = mongoose.connection
    db.on("erro",(err)=>console.error(err))
    db.once("open",()=>console.log('conectado ao mongoDb com sucesso'))
}