#Endpoints implementados:

#rota de teste   
routes.get('/', (req, res) => {
  res.send(`atualiza ? sim`);
});

#GET
    #SALAS
         --retorna a lista de salas
         /room

         --busca sala pelo id
         /room/:id

    #MENSAGENS
         --busca a lista de mensagens em uma sala
         /message/:roomId

         --busca mensagem pelo id
         /message/:id


#POST
    #SALAS
         --cria uma sala
         /room
    #MENSAGENS
         --envia uma mensagem
         '/message/send'

