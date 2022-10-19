const comentarios = require('./comentariosController');
const usuarios = require('./usuariosController');

const controllers = {
    comentarios: comentarios,
    usuarios: usuarios
}

module.exports = controllers;