const express = require('express');
const routes = express.Router();

const UserControllers = require('./Controllers/UserController');
const PerguntaControllers = require('./Controllers/PerguntController');
const RespostaControllers = require('./Controllers/RespostaControllers')


routes.get('/list' , UserControllers.index);
routes.get('/list/:id' ,  UserControllers.show);
routes.post('/save' ,  UserControllers.store);
routes.put('/update/:id' ,  UserControllers.update);
routes.delete('/delete/:id' ,  UserControllers.destroy);


routes.get('/perguntas' , PerguntaControllers.index);
routes.get('/pergunta/:id' , PerguntaControllers.show)
routes.post('/pergunta/save' , PerguntaControllers.store);
routes.delete('/dell/:id' ,  PerguntaControllers.destroy);

routes.post('/resposta/save' ,RespostaControllers.create )

module.exports = routes;