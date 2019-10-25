const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const RestaurantSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'users'},
    name: {
        type: String,
        default: "",
    },
    currency: {
        type: String,
        default: "BAM"
    },
    description: {
        type: String,
        default: "",
    },
    phonenumber: {
        type: String,
        default: "",
    },
    address: {
        type: String,
        default: ""
    },
    openTime: {
        type:Date,
    },
    closeTime: {
        type: Date,
    },
    deliveryFrom: {
        type: Date,
    },
    deliveryTo: {
        type: Date,
    },
    minOrder: {
        type: Number,
        default: 0
    },
    latitude: {
        type: String,
        default: ""
    },
    longitude: {
        type: String,
        default: ""
    },
    deliveryRadius: {
        type: Number,
        default: 0
    },
    
    state: {
        type: String,
        default: "Bosnia"
    },
    deliveryTime: {
        type: Number,
        default: 30,
    },
    deliveryPoint: {
        type: String,
        default: ""
    },
    deliveryStatus: {
        type: Boolean,
        default: false,
    },
    deliveryType: {
        type: Number,
        default: 0
    },
    deliveryPrice: {
        type: Number,
        default: 0.00
    },
    coverImage: {
        type: String,
        default: ""
    },
})

module.exports = Restaurant = mongoose.model("restaurant", RestaurantSchema)