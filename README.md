#Endpoints implementados:

    #GET
    /room   -> retorna lista de salas de chat cadastradas
    /room/:id -> retorna a sala com o id informado

    #POST
    /room   -> cadastra nova sala de chat
    /room/send -> acrescenta nova mensagem a lista de mensagens de determinada sala. Recebe o seguinte objeto 
    {
        "id": {id da sala},
	    "userName": {nome do usuario},
	    "message": {mensagem}
    }
