const Pergunta = require('../models/Pergunta');

module.exports = {
    async index(req , res){
        const pergunta= await Pergunta.findAll({});

        return res.json(pergunta);
    },

    async show(req , res){
        try{
            const pergunta = await Pergunta.findByPk(req.params.id);
            return res.json(pergunta)
        }catch(err){
            return res.json(400).json({error : err.message});
        }
    },

    async store(req , res){
        const pergunta = await Pergunta.create(req.body);

        return res.json(pergunta);
    },
    async destroy(req , res){
        try{
            var pergunta = await Pergunta.findByPk(req.params.id);

            await pergunta.destroy();

            return res.json(pergunta)
        }catch(err){
            return res.status(400).json({ error: error.message});
        }
    }
}