// partie de la requète https déportée ici (entrée de l'application)
const express = require('express');
const { resolve } = require('path');
const app = express();
const appRoutes = require('./routing/app.routes.js');
const apiUsersRoutes = require('./routing/api-users.routes.js');

// pour dire à express où sont les static là dans public ... {index: false});
app.use(express.static(resolve('public')));

app.use(apiUsersRoutes);
app.use(appRoutes);

module.exports = app;
