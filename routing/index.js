// centralise les accès aux routeurs spécifiques
const express = require('express');
const router = express.Router();

const appRoutes = require('./app.routes.js');
const apiUsersRoutes = require('./api-users.routes.js');

router.use(apiUsersRoutes);
router.use(appRoutes);

module.exports = router; 
/* {
    apiUsersRoutes,
    appRoutes
}*/