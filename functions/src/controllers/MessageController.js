const axios = require('axios');


module.exports = {
    async index(request, response) {
        const {roomId} = request.params;
    
        axios.get(`https://chat-room-4fe30.firebaseio.com/messages.json?orderBy="roomId"&equalTo="${roomId}"`)
        .then(res=>{
            return response.json(res.data)
        })
        .catch(err=>{
            return response.json(err)
        })
       
        
    },

    async show(request, response) {
        const {id} = request.params;
        axios.get(`https://chat-room-4fe30.firebaseio.com/messages/-${id}.json`)
        .then(res=>{
            return response.json(res.data)
        })
        .catch(err=>{
            return response.json(err)
        })
        
       
    },

    async store(request, response) {
        const { userName, text, roomId } = request.body;
        
        axios.post(`https://chat-room-4fe30.firebaseio.com/messages.json`, { userName, text, roomId })
        .then(res=>{
            return response.json(res.data)
        })
        .catch(err=>{
            return response.json(err)
        })
       
    },
}