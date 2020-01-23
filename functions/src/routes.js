const { Router } = require('express');
const RoomController = require('./controllers/RoomController');
/* const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController'); */

const routes = Router();

//index, show, store, update, destroy
/* 
routes.post('/devs', DevController.store );

routes.get('/devs', DevController.index );

routes.get('/search', SearchController.index ); */

routes.get('/', (req, res) => {
  res.send(`hello`);
});


routes.post('/room', RoomController.store);

routes.get('/room', RoomController.index);

routes.get('/room/:id', RoomController.show);

//temporario, mudar pra um controller so de mensagem
routes.post('/room/send', RoomController.update);

module.exports = routes;
