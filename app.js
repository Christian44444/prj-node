// partie de la requète https déportée ici (entrée de l'application)
const express = require('express');
const { resolve } = require('path');
const app = express();
const indexRoutes = require('./routing/index');
// ou const indexRoutes = require('./routing'); car index est le fichier par défaut

// pour dire à express où sont les static là dans public ... {index: false});
app.use(express.static(resolve('public'))); // , {index: false}));
app.use(indexRoutes);

module.exports = app;
