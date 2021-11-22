const modelCarrinho = require('../models/modelCarrinho')


exports.listarCarrinho = async (req,res)=>{
    const query =await modelCarrinho.find()
    res.json(query)
}
exports.inserirCarrinho = (req,res)=>{
    const query = modelCarrinho.create({
        nome:req.body.nome,
        imagem:req.body.imagem,
        valor:req.body.valor,
        quantidade:req.body.quantidade
    })
    if(query){
        res.send('item inserindo')
    }else{
        res.send('falha na insersão')
    }
}

exports.deletarCarrinho = (req,res)=>{
    modelCarrinho.findByIdAndDelete(req.params.id,(err)=>{
        if(err){
            res.send('delete com sucesso')
        }else{
            res.send('erro')
        }
    })
}
exports.alterarCarrinho = (req,res)=>{
    modelCarrinho.findByIdAndUpdate(req.params.id,{
        quantidade:req.body.quantidade
    },(err)=>{
        if(err){
            res.send('alterado com sucesso')
        }else{
            res.send('erro')
        }
    })
}