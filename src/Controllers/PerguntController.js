const Pergunta = require('../models/Pergunta');

module.exports = {
    async index(req , res){
        const pergunta= await Pergunta.findAll({});

        return res.json(pergunta);
    },

    async show(req , res){
            const pergunta = await Pergunta.findByPk(req.params.id);
            return res.json(pergunta)

    },

    async store(req , res){
        const pergunta = await Pergunta.create(req.body);

        return res.json(pergunta);
    },
    async update(req , res) {
        var pergunta = await Pergunta.findByPk(req.params.id);
        await pergunta.update(req.body)

        return res.json(pergunta);
    },

    async destroy(req , res){

    
            var pergunta = await Pergunta.findByPk(req.params.id);

            await pergunta.destroy();

            return res.json(pergunta)
    }
}