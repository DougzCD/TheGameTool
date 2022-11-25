const {User} = require('../models');
const {Router} = require('express');


const roteador = Router();
//CRUD - Create, Read, Update, Destroy
//em REST
roteador.get('/', async(req, res)=>{
  
});

roteador.get('/login', async(req, res)=>{
    res.render('usuarios/login');
});

roteador.get('/logoff', async(req, res)=>{
    req.session.destroy();
    res.redirect('/usuarios/login');
});


roteador.get('/novo', (req, res)=>{
    res.render('usuarios/novo');    
});

roteador.get('/:id', async(req, res)=>{

});

roteador.get('/:id/edit', async(req, res)=>{

});

roteador.post('/login', async (req, res)=>{
    const {username, password} = req.body;
    
    const user = await User.findOne({
        where: {
            username: username,
            password: password
        }   
    });

    req.session.login = false;
    if(user){
        req.session.login = true;
        res.redirect('/comentarios');
    }else{
        res.redirect('/usuarios/login');
    }   
       
});

roteador.post('/novo', async (req, res)=>{
    const {username, password} = req.body;
    await User.create({username, password});
    res.redirect('/usuarios/login');
       
});

roteador.delete('/:id', async(req, res)=>{

});

module.exports = roteador;