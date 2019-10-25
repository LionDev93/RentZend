const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const DailyMenuSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'users'},
    name: {
        type: String,
        default: "",
    },
    price: {
        type: Number,
        default: 0,
    },
    available: {
        type: Number,
        default: 0,
    },
    image: {
        type: String,
        default: ""
    },
    restaurantId: {
        type: Number,
        default: 0
    },
    describe: {
        type: String,
        default: ""
    },
    sponsored: {
        type: Number,
        default: ""
    },
    date: {
        type: String,
        default: ""
    },
    idFood: {
        type: Number,
        default: 0
    },
    numberOfAds: {
        type: Number,
        default: 0
    },
    priceEuro: {
        type: Number,
        default: ""
    },
    categoryName: {
        type: String,
        default: ""
    },
})

module.exports = DailyMenu = mongoose.model("dailyMenu", DailyMenuSchema)