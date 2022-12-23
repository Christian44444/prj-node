// partie de la requète https déportée ici (entrée de l'application)
const express = require('express');
const { resolve } = require('path');
const app = express();
const indexRoutes = require('./routing/index');

// pour dire à express où sont les static là dans public ... {index: false});
app.use(express.static(resolve('public')));
app.use(indexRoutes);

module.exports = app;
