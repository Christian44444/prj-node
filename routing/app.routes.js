// .Router() : La méthode de express qui gère les routes en automatique 
// (équivalent du esprex.js fait à la main )
const appRouter = require('express').Router();

const appController = require('../controllers/app.controller');
const getHome = appController.getHome;
const getServices = appController.getServices;
const getUsers = appController.getUsers;
const getContact = appController.getContact;
const get404 = appController.get404;   

const { resolve } = require('path');

appRouter.get("/", getHome);
appRouter.get("/home", getHome);
appRouter.get("/services", getServices);
appRouter.get("/users", getUsers);
appRouter.get("/contact", getContact);

// "*" route par défaut toujours à la fin si en entête des routes alors les autres ne seront pas exécutées
appRouter.get("*", get404);

module.exports = appRouter;

