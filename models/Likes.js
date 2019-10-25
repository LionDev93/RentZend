const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const LikesSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'users'},
    idFood: {
        type: Schema.Types.ObjectId,
        default: 0,
    },
    idUser: {
        type: Schema.Types.ObjectId,
        default: 0,
    },

})

module.exports = Likes = mongoose.model("likes", LikesSchema)