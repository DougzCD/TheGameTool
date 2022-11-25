const commentsController = require('./commentsController');
const usersController = require('./usersController');

controllers = {
    comments: commentsController,
    users: usersController
}

module.exports = controllers;