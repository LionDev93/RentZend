const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const RestaurantInfoSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'users'},

})

module.exports = RestaurantInfo = mongoose.model("restaurantInfo", RestaurantInfoSchema)