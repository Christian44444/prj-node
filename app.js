// partie de la requète https déportée ici (entrée de l'application)
const express = require('express');
const { resolve } = require('path');
const app = express();

// pour dire à express où sont les static là dans public
app.use(express.static(resolve('public')));

app.get('/api/users', (req, res) =>{
    const data = require('database/data.json');
    res.json({
        nbOfUsers: data.users.length,
        users: data.users
    });
    
    // res.json({name: 'coco'});
});

app.get("/", (req, res) => {
    res.sendFile(resolve("public","index.html"));
});
app.get("/home", (req, res) => {
    res.sendFile(resolve("public","index.html"));
});
app.get("/services", (req, res) => {
    res.sendFile(resolve("public","services.html"));
});
app.get("/contact", (req, res) => {
    res.sendFile(resolve("public","contact.html"));
});



// "*" route par défaut toujours à la fin si en entête des routes alors les autres ne seront pas exécutées
app.get("*", (req, res) => {
    res.sendFile(resolve("public", "page404.html"));
});

module.exports = app;
