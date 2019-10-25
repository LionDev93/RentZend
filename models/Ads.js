const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const AdsSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'users'},
    name: {
        type: String,
        default: "",
    },
    price: {
        type: String,
        default: "",
    },
    restaurantId: {
        type: Number,
        default: 0,
    },
})

module.exports = Ads = mongoose.model("ads", AdsSchema)