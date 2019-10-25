const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const EventSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'users'},
    image: {
        type: String,
        default: "",
    },
    eventDate: {
        type: String,
        default: "",
    },
    title: {
        type: String,
        default: "",
    },
    content: {
        type: String,
        default: ""
    },
    categoryId: {
        type: Number,
        default: 0
    },
    restaurantId: {
        type: Number,
        default: 0,
    },
})

module.exports = Event = mongoose.model("event", EventSchema)