const apiUsersRouter = require('express').Router(); 

apiUsersRouter.get('/api/users', (req, res) =>{
    const data = require('../database/data.json');
    res.json({
        nbOfUsers: data.users.length,
        users: data.users
    });
    
    // res.json({name: 'coco'});
});

module.exports = apiUsersRouter;