const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const PortionSchema = new Schema({
    dish_id: {type: Schema.Types.ObjectId, ref: 'users'},
    name: {
        type: String,
        default: "",
    },
    price: {
        type: Number,
        default: 0,
    },
    currency: {
        type: String,
        default: "CHF",
    }
})

module.exports = Portion = mongoose.model("portion", PortionSchema)