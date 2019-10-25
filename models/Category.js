const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const CategorySchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'users'},
    name: {
        type: String,
        default: "",
    },
    describe: {
        type: String,
        default: "",
    },
    image: {
        type: String,
        default: "",
    },
    restarantId: {
        type: Number,
        default: 0
    }
})

module.exports = Category = mongoose.model("category", CategorySchema)