const { Router } = require('express');
const RoomController = require('./controllers/RoomController');
const MessageController = require('./controllers/MessageController');


const routes = Router();


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


module.exports = routes;
