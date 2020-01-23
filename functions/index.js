const functions = require('firebase-functions');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./src/routes');
//const {setupWebsocket} = require('./websocket');

const app = express();
//const server = http.Server(app);

//setupWebsocket(server)

//m2P1pvrTef81Krr2
//mongodb+srv://samuel:<password>@cluster0-j9gxy.gcp.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://samuel:m2P1pvrTef81Krr2@cluster0-j9gxy.gcp.mongodb.net/chat-room?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors({origin:true}));
app.use(express.json());
app.use(routes);

//server.listen(3333);

exports.app = functions.https.onRequest(app);


//query params: request.query (filtros,ordenação, etc...)
//route params: request.params (identificar um recurso -put/delete-)
//body: request.body
