const multer = require('multer')
const path = require('path')
const cripto = require('crypto')

module.exports = {
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,path.resolve(__dirname))
        },
        filename:(req,file,cb)=>{
            cripto.randomBytes(8,(err,hash)=>{
                if(err)cb(err)
                const fileName = `${hash.toString('hex')}-${file.originalname}`
                cb(null,fileName)
            })
        }
    }) 
}