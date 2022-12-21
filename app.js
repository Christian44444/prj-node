// partie de la requète https déportée ici (entrée de l'application)
const esprex = require('./core/esprex');
const app = esprex();

app.get('/', (req, res) => {
    console.log('coucou');

    res.end('Home Page');
});

app.get('/contact', (req, res) => {
    console.log('contact');
    res.end('Contact Page');
});


module.exports = app;
