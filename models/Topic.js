const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const TopicSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'users'},
    title: {
        type: String,
        default: "",
    },
    content: {
        type: String,
        default: "",
    },
    idUser: {
        type: Schema.Types.ObjectId,
        default: "",
    },
    
})

module.exports = Topic = mongoose.model("topic", TopicSchema)