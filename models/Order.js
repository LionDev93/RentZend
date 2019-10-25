const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const OrderSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'users'},
    name: {
        type: String,
        default: "",
    },
    quantity: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        default: 0,
    },
    totalPrice: {
        type: Number,
        default: 0
    },
    restaurantId: {
        type: Number,
        default: 0
    },
    date: {
        type: String,
        default: ""
    },
    ads: {
        type: String,
        default: ""
    },
    idUser: {
        type: Number,
        default: 0
    },
    address: {
        type: String,
        default: ""
    },
    status: {
        type: Number,
        default: 0
    },
    notification: {
        type: Number,
        default: 1
    },
    reason: {
        type: String,
        default: ""
    },
    notificationUser: {
        type: Number,
        default: 0
    },
    note: {
        type: String,
        default: ""
    },
    phone: {
        type: String,
        default: ""
    },
    delivery: {
        type: String,
        default: ""
    },
    userDeliveryTime: {
        type: String,
        default: ""
    },
    portion: {
        type: String,
        default: ""
    },
    restaurantDeliveryTime: {
        type: String,
        default: ""
    },
})

module.exports = Order = mongoose.model("order", OrderSchema)