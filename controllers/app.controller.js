const { resolve } = require('path');

const getHome = (req, res) => {
    // avant res.sendFile(resolve("public","index.html"));
    // res.send(require('../views/pages/home'));
    res.render('pages/home.pug');
}
const getServices = (req, res) => {
    res.render('pages/services.pug');
}
const getUsers = (req, res) => {
    const {users} = require("../database/data")
    res.render('pages/users.pug', {users});
}
const getContact = (req, res) => {
    res.render('pages/contact.pug');
}
const get404 = (req, res) => {
    res.render('pages/page404.pug');
}

module.exports = {
    getHome,
    getServices,
    getUsers,
    getContact,
    get404
}