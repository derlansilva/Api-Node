const Resposta = require('../models/Resposta');


module.exports={
    async create(req , res){
        const resposta = await Resposta.create(req.body)

        return res.json(resposta);
    }
}