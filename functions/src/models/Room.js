const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    name: String, 
});

module.exports = mongoose.model('Room',RoomSchema);

/* {
    userName: String,
    date: Date,
    message: String,
} */