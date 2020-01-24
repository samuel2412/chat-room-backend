const axios = require('axios');


module.exports = {
    async index(request,response){
        axios.get(`https://chat-room-4fe30.firebaseio.com/rooms.json`)
        .then(res=>{
            return response.json(res.data)
        })
        .catch(err=>{
            return response.json(err)
        })
    },

    async show(request,response){
        const {id} = request.params;
        axios.get(`https://chat-room-4fe30.firebaseio.com/rooms/-${id}.json`)
        .then(res=>{
            return response.json(res.data)
        })
        .catch(err=>{
            return response.json(err)
        })
    },

    async store(request, response) {
        const { name } = request.body;

        axios.post(`https://chat-room-4fe30.firebaseio.com/rooms.json`, { name })
        .then(res=>{
            console.log(res)
            return response.json(res.data)
        })
        .catch(err=>{
            return response.json(err)
        })
    },
    
}