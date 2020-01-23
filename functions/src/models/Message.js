const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    userName: String,
    text: String,
    date: Date,
    roomId: String,
});

module.exports = mongoose.model('Message',MessageSchema);

/* {
    userName: String,
    date: Date,
    message: String,
} */