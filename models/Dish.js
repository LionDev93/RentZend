const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PortionSchema = new Schema({
    title: { type: String, default: ""},
    price: { type: Number, default: 0}
})
//Create Schema
const DishSchema = new Schema({
    restaurant_id: {type: Schema.Types.ObjectId, ref: 'restaurants'},
    name: { type: String, default: ""},
    description: { type: String, default: ""},
    image: {type: String, default:""},
    price: {type: Number, default: 0},
    currency: {type: String, default: "CHF"},
    avaliable: { type: Boolean, default: true},
    likes: {type: Number, default: 0},
    category: {type: Number, default: 0}, //1-Nibbles, Breakfast, Fish, Sandwich
    portion: [PortionSchema]
})

module.exports = Dish = mongoose.model("dish", DishSchema)