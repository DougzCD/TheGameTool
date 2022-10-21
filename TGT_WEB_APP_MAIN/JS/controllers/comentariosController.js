const {Router} = require('express');

const roteador = Router()


let comentarios = [
    {
        id: 1,
        usuario: 'Fulano',
        comentario: 'Comentário do Fulano'
    },
    {
        id: 2,
        usuario: 'Ciclano',
        comentario: 'Fulano, seu comentário é muito ruim!'
    },
    {
        id: 3,
        usuario: 'Beltrano',
        comentario: 'Só li verdades.'
    }
];


let ids = 3;

roteador.get('/',(req, res)=>{

    res.status(200).render('index', {comentarios});

    //res.status(200).send(comentarios);
});

roteador.get('/novo', (req, res)=>{
    res.status(200).render('new');
});

roteador.get('/:id', (req, res)=>{
    const {id} = req.params;

    const comentario = comentarios.find(c => c.id == id);

    res.status(200).render('edit', {...comentario});
});


roteador.post('/', (req, res)=>{
    const {usuario, comentario} = req.body;
    ids++;
    console.log({id:ids, usuario, comentario});
    comentarios.push({id: ids, usuario, comentario});
    
    res.status(201).redirect('/comentario');
});


roteador.patch('/:id', (req, res)=>{
    let {comentario} = req.body;
    const {id} = req.params;

    novoComentario = comentario;
    comentario = comentarios.find(c => c.id == id);
    comentario.comentario = novoComentario;
    res.status(200).redirect('/comentario');
});

roteador.delete('/:id', (req, res)=>{
    let {id} = req.params;

    comentarios = comentarios.filter(c => c.id != id);
    res.status(200).redirect('/comentario');
    //res.status(200).send(comentarios);
});

module.exports = roteador;