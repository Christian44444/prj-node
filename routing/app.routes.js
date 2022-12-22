// .Router() : La méthode de express qui gère les routes en automatique 
// (équivalent du esprex.js fait à la main )
const appRouter = require('express').Router(); 
const { resolve } = require('path');

appRouter.get("/", (req, res) => {
    res.sendFile(resolve("public","index.html"));
});
appRouter.get("/home", (req, res) => {
    res.sendFile(resolve("public","index.html"));
});
appRouter.get("/services", (req, res) => {
    res.sendFile(resolve("public","services.html"));
});
appRouter.get("/contact", (req, res) => {
    res.sendFile(resolve("public","contact.html"));
});

// "*" route par défaut toujours à la fin si en entête des routes alors les autres ne seront pas exécutées
appRouter.get("*", (req, res) => {
    res.sendFile(resolve("public", "page404.html"));
});
module.exports = appRouter;

