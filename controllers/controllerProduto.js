
const modelProduto = require('../models/modelProduto')
//configuração do multer para facilitar o teste de crud 


exports.listar =async (req,res)=>{
    const produto =await modelProduto.find()
    res.json(produto)
}

exports.inserir = (req,res)=>{
    const produto = modelProduto.create({
        nome:(req.body.nome).toLowerCase(),
        imagem:req.body.imagem,
        peso:req.body.peso,
        descricao:req.body.descricao,
        ingredientes:req.body.ingredientes,
        valor:req.body.valor
    })
    if(produto){
        res.send('produto inserido com sucesso')
    }else{
        res.send('erro')
    }
}