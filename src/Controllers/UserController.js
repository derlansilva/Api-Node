const User = require('../models/Usuario');

module.exports = {
    async index(req , res ){
        const user = await User.findAll({});

        return res.json(user);
    },

    async show(req , res){
        try{
            const user = await User.findByPk(req.params.id)
            return res.json(user)
        }catch(error){
            return res.status(400).json({ error : error.message})
        }
    },

    async store(req , res ){
        const user = await User.create(req.body);

        return res.json(user);
    },
    
    async update(req , res){
        try{
            const user = await User.findByPk(req.params.id);
            await user.update(req.body);

            return res.json(user);
        }catch(err){
            return res.status(400).json({error : error.message});
        }
    },

    async destroy(req , res){
        try{
            var user = await User.findByPk(req.params.id)

            await user.destroy();

            return res.json();
        }catch(err){
            return res.status(400).json({ error: error.message});
        }
    }
}
