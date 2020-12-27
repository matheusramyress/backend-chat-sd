const express = require('express');
const routes = express.Router();
const { celebrate, Joi, errors, Segments } = require('celebrate');
const userController = require('../controller/UserController');
const messageController = require('../controller/MessageController');

//parte do frontend
routes.get('/chat',(req,res)=>{
    res.render('index');
});


//listar usuarios
routes.get('/usuario', userController.index);

//buscar usuario por email
routes.post('/usuario/email', celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required().email(),
    })
}),userController.finByEmail);

//buscar usuario por id
routes.get('/usuario/:id', userController.finById);


//criar usuarios
routes.post('/usuario',celebrate({
    [Segments.BODY]: Joi.object().keys({

        nome: Joi.string().required().min(4).max(60),
        email: Joi.string().required().email(),
        senha: Joi.string().required().min(8).max(100),
         
    })
}),userController.create);

//criar mensagem
routes.post('/mensage', celebrate({
    [Segments.BODY]: Joi.object().keys({
        conteudo: Joi.string().required(),
       autor: Joi.string().required(),
         
    })
}), messageController.create);

//listar mensagens
routes.get('/mensage',messageController.index);


//buscarMensagens
routes.post('/mensage/findmessage', celebrate({
    [Segments.BODY]:Joi.object().keys({
        autor:Joi.string().required().email(),
    })
}), messageController.findMessages);



module.exports = routes;