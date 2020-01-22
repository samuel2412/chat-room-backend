const {Router} = require('express');
const RoomController = require('./controllers/RoomController');
/* const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController'); */

const routes = Router();

//index, show, store, update, destroy
/* 
routes.post('/devs', DevController.store );

routes.get('/devs', DevController.index );

routes.get('/search', SearchController.index ); */

routes.get('/', function (req, res) {
    res.send('hello room');
  });


routes.post('/room', RoomController.store );

routes.get('/room', RoomController.index );

//temporario, mudar pra um controller so de mensagem
routes.post('/room/send', RoomController.update );

module.exports = routes;
