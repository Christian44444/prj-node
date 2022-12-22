// partie de la requète https déportée ici (entrée de l'application)
const esprex = require('./core/esprex');
const app = esprex();

// app.get('/','GET', (req, res) => {
app.get('/', (req, res) => {    
    console.log('home');
    res.end('Home Page');
});

//app.get('/contact', 'GET', (req, res) => {

app.get('/contact', (req, res) => {
    console.log('Contact page GET');

    res.end(
        `<h1>Contact Page</h>
        <form method="POST" action="/contact">
            <input type="text" name="email">
            <button type="submit">Envoyer</button>
        </form>`
    );
});

// app.post('/contact', 'POST',(req, res) => {
app.post('/contact', (req, res) => {
    console.log('contact');
    res.end('Contact Page POST');
});

module.exports = app;
