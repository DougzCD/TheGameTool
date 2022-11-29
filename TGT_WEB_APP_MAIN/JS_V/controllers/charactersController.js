const {OwnedCharacters, User} = require('../models');
const {Router} = require('express');

const roteador = Router();
//CRUD - Create, Read, Update, Destroy
//em REST
roteador.get('/', async(req, res)=>{
    
    const ownedCharacters = await OwnedCharacters.findAll({
        include: [
            {model:User}
        ]
     });

    ownedCharacters.username = ownedCharacters.User.username;

    res.render('ownedCharacters/index', {ownedCharacters});
});

roteador.get('/novo', (req, res)=>{
    res.render('ownedCharacters/novo');
});

roteador.get('/:id', async(req, res)=>{
    const {id} = req.params;
    let ownedCharacters = await OwnedCharacters.findByPk(id,{
        include: [{model:User}]
    });

    res.render('ownedCharacters/apresenta', {ownedCharacters});
});

roteador.get('/:id/edit', async(req, res)=>{
    const {id} = req.params;
    let ownedCharacters = await OwnedCharacters.findByPk(id);
    res.render('ownedCharacters/edit', {ownedCharacters});
});

roteador.post('/', async (req, res)=>{
    const {username, ownedCharacters} = req.body;
    
    const {id} = await User.findOne({
        where: {username: username}
     });

     if(!id){
         res.send('<h1>Usuário não encontrado</h1>');
     }else{
        const userId = id;
        await OwnedCharacters.create({username, ownedCharacters, userId});
        res.redirect('/ownedCharacters');
     }

});


roteador.patch('/:id', async(req, res)=>{

    const ownedCharacters = req.body.ownedCharacters;

    await OwnedCharacters.update(
        {ownedCharacters},
        {
            where: {id: req.params.id}
        }
    );

    res.redirect('/ownedCharacters');
});

roteador.delete('/:id', async(req, res)=>{

    await OwnedCharacters.destroy(
        {
            where: {id: req.params.id}
        }
    );

    res.redirect('/ownedCharacters');
});

module.exports = roteador;