const { resolve } = require('path');

const getHome = (req, res) => {
    // avant res.sendFile(resolve("public","index.html"));
    res.send(require('../views/index'));
}
const getServices = (req, res) => {
    res.send(require('../views/services'));
}
const getUsers = (req, res) => {
    res.send(require('../views/users'));
}
const getContact = (req, res) => {
    res.send(require('../views/contact'));
}
const get404 = (req, res) => {
    res.send(require('../views/page404'));
}

module.exports = {
    getHome,
    getServices,
    getUsers,
    getContact,
    get404
}