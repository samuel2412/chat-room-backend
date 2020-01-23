const axios = require('axios');
const Message = require('../models/Message');
//const {findConnections,sendMessage} = require('../websocket');

module.exports = {
    async index(request, response) {
        const messages = await Message.find({ roomId: request.params.roomId });
        return response.json(messages)
    },

    async show(request, response) {
        const message = await Message.findById(request.params.id);
        return response.json(message)
    },

    async store(request, response) {
        const { userName, text, roomId } = request.body;

        message = await Message.create({ userName, text, date: Date.now() , roomId })

        //filtrar as conexoes que estao no maximo
        //a 10km de distancia e que tenha pelo menos uma das techs filtradas
        /*  const sendSocketMessageTo = findConnections(
            {latitude,longitude},
             techsArray
             );

             sendMessage(sendSocketMessageTo,'new-dev',dev) */

        return response.json(message)
    },
}