const {Comment, User} = require('../models');
const {Router} = require('express');

const roteador = Router();
//CRUD - Create, Read, Update, Destroy
//em REST
roteador.get('/', async(req, res)=>{
    
    const comentarios = await Comment.findAll({
        include: [
            {model:User}
        ]
     });

    comentarios.username = comentarios.User.username;

    res.render('comentarios/index', {comentarios});
});

roteador.get('/novo', (req, res)=>{
    res.render('comentarios/novo');
});

roteador.get('/:id', async(req, res)=>{
    const {id} = req.params;
    let comentario = await Comment.findByPk(id,{
        include: [{model:User}]
    });

    res.render('comentarios/apresenta', {comentario});
});

roteador.get('/:id/edit', async(req, res)=>{
    const {id} = req.params;
    let comentario = await Comment.findByPk(id);
    res.render('comentarios/edit', {comentario});
});

roteador.post('/', async (req, res)=>{
    const {username, comment} = req.body;
    
    const {id} = await User.findOne({
        where: {username: username}
     });

     if(!id){
         res.send('<h1>Usuário não encontrado</h1>');
     }else{
        const userId = id;
        await Comment.create({username, comment, userId});
        res.redirect('/comentarios');
     }

});


roteador.patch('/:id', async(req, res)=>{

    const comment = req.body.comment;

    await Comment.update(
        {comment},
        {
            where: {id: req.params.id}
        }
    );

    res.redirect('/comentarios');
});

roteador.delete('/:id', async(req, res)=>{

    await Comment.destroy(
        {
            where: {id: req.params.id}
        }
    );

    res.redirect('/comentarios');
});

module.exports = roteador;