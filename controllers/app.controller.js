const { resolve } = require('path');

const getHome = (req, res) => {
    res.sendFile(resolve("public","index.html"));
}
const getServices = (req, res) => {
    res.sendFile(resolve("public","services.html"));
}
const getContact = (req, res) => {
    res.sendFile(resolve("public","contact.html"));
}
const get404 = (req, res) => {
    res.sendFile(resolve("public", "page404.html"));
}

module.exports = {
    getHome,
    getServices,
    getContact,
    get404
}