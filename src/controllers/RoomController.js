const axios = require('axios');
const Room = require('../models/Room');
//const {findConnections,sendMessage} = require('../websocket');

module.exports = {
    async index(request,response){
        const rooms = await Room.find();
        return response.json(rooms)
    },

    async store(request, response) {
        const { name } = request.body;

            room = await Room.create({
                name,
                messages: []
            })

            //filtrar as conexoes que estao no maximo
            //a 10km de distancia e que tenha pelo menos uma das techs filtradas
           /*  const sendSocketMessageTo = findConnections(
               {latitude,longitude},
                techsArray
                );

                sendMessage(sendSocketMessageTo,'new-dev',dev) */
        
        return response.json(room)
    },

    async update(request, response) {
        const { id, userName, message } = request.body;

        const room = await Room.findById(id);
        
        room.messages.push(
            {
                userName,
                date: Date.now,
                message
            })
        await room.save();

        return response.json(room)
    }
    
}