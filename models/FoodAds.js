const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const FoodAdsSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'users'},
    idFood: {
        type: Number,
        default: 0,
    },
    idAds: {
        type: Number,
        default: 0,
    },

})

module.exports = FoodAds = mongoose.model("foodAds", FoodAdsSchema)