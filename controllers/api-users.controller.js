const getUsers = (req, res) =>{
    const data = require('../database/data.json');
    res.json({
        nbOfUsers: data.users.length,
        users: data.users
    });
}

module.exports = {
    getUsers
}
