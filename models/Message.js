const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const MessageSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'users'},
    title: {
        type: String,
        default: "",
    },
    content: {
        type: String,
        default: "",
    },
    date: {
        type: Date,
        default: Date.now,
    },
    author: {
        type: Number,
        default: 0,
    },
    topicId: {
        type: Number,
        default: 0
    },
})

module.exports = Message = mongoose.model("message", MessageSchema)