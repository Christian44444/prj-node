// CORE/ESPREX.JS
const esprexApp = (req, res) => {
    // routing --> déclenchement du bon ctrl en fonction de l'url de la requête
    // Object.keys(esprexApp.router.routes).find(k => k==req.url) 
    if (esprexApp.router.routes[req.url]) {
        esprexApp.router.routes[req.url](req, res);
        res.end('Mon App');
 
    }
    else 
    { 
        console.log(req.url) ;
        console.log(esprexApp.router.routes[req.url]);
        res.end('Mon App');
    };
  };
  
  esprexApp.router = { routes: {}};
  
  esprexApp.get = function(paramRoute, paramCtrl) {
    esprexApp.router.routes[paramRoute] = paramCtrl;
  };
  
  
  // APP.JS
  const app = esprexApp;
  
  app.get('/home', (request, response) => { console.log('CTRL:', request.url); });
  app.get('/contact', (request, response) => { console.log('CTRL:', request.url); });
  app.get('/home', (request, response) => { console.log('CTRL HOME:', request.url); });
  
  // BIN/WWW
  require('http')
    .createServer(app)
    .listen(8989);
  