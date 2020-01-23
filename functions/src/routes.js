const { Router } = require('express');
const RoomController = require('./controllers/RoomController');
const MessageController = require('./controllers/MessageController');
/* const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController'); */

const routes = Router();

//index, show, store, update, destroy
/* 
routes.post('/devs', DevController.store );

routes.get('/devs', DevController.index );

routes.get('/search', SearchController.index ); */

routes.get('/', (req, res) => {
  res.send(`atualiza ? sim`);
});

//cria uma sala
routes.post('/room', RoomController.store);

//retorna a lista de salas
routes.get('/room', RoomController.index);

//busca sala pelo id
routes.get('/room/:id', RoomController.show);

//busca a lista de mensagens em uma sala
routes.get('/message/:roomId',MessageController.index);

//busca mensagem pelo id
routes.get('/message/:id', MessageController.show);

//envia uma mensagem
routes.post('/message/send',MessageController.store)


//temporario, mudar pra um controller so de mensagem
//routes.post('/room/send', RoomController.update);

module.exports = routes;
