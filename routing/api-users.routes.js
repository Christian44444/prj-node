const apiUsersRouter = require('express').Router(); 
const apiUsersController = require('../controllers/api-users.controller');
const getUsers = apiUsersController.getUsers;

apiUsersRouter.get('/api/users', getUsers); /* res.json({name: 'coco'}); */

module.exports = apiUsersRouter;