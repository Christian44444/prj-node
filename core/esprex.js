
const esprexApp = (req, res) =>{
    // déclanchement des routes qui ont été sauvegardées par l'exécution des app.get() dans routes 
    // version longue esprexApp.router.routes[req.url](req, res);
    // affectation par destructuration ou pour comprendre const {esprexApp.router:{routes}} = esprexApp;
    
    const {router:{routes}} = esprexApp;
    if (routes[req.url + "," + req.method]){
            console.log(req.method);
            routes[req.url + "," + req.method](req, res);  // exécution de la requète si elle est paramétrée dans app.js 
                                        // car app.js lance la méthode get ici qui renseigne [route] = controller; 
                                        // en temps que propriété : valeur ex: {'/' : controller}
    }
    else {
        res.end('HTTPS');
    }
};
esprexApp.router = {
    routes: { }
};

esprexApp.get = function(route, verbe, controller) {
    console.log(".GET" + route + verbe)
    // on ajoute ou écrase si elle existe la propriété route passée en paramètre avec la valeur controller passée elle aussi en paramètres
    esprexApp.router.routes[route + "," + verbe] = controller;
};

esprexApp.post = function(route, verbe, controller) {
    // on ajoute ou écrase si elle existe la propriété route passée en paramètre avec la valeur controller passée elle aussi en paramètres
    console.log(".POST")
    esprexApp.router.routes[route + "," + verbe] = controller;
};

module.exports  = () => esprexApp;