const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const CategoryAdsSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'users'},
    idAds: {
        type: Number,
        default: 0,
    },
    categoryId: {
        type: Number,
        default: 0,
    },
})

module.exports = CategoryAds = mongoose.model("categoryAds", CategoryAdsSchema)