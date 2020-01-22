#Endpoints implementados:
    #GET
    /room   -> retorna lista de salas de chat cadastradas

    #POST
    /room   -> cadastra nova sala de chat
    /room/send -> acrescenta nova mensagem a lista de mensagens de determinada sala. Recebe o seguinte objeto {
        "id": {id da sala},
	    "userName": {nome do usuario},
	    "message": {mensagem}
    }
}