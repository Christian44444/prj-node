// centralise les accès aux routeurs spécifiques
const express = require('express');
const router = express.Router();

const appRoutes = require('./app.routes.js');
const apiUsersRoutes = require('./api-users.routes.js');

router.use('/api/users', apiUsersRoutes); // pour accéder à la racine
router.use(appRoutes);
// appRouter.get("*", get404);  router.get('*', (req, res)=> res.redirect(/page404))

module.exports = router; 
/* {
    apiUsersRoutes,
    appRoutes
}*/