const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const AddressSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'users'},
    street: {
        type: String,
        default: "",
    },
    streetNumber: {
        type: String,
        default: "",
    },
    city: {
        type: String,
        default: "",
    },
    state: {
        type: String,
        default: "",
    },
    lat: {
        type: String,
        default: "",
    },
    lon: {
        type: String,
        default: "",
    },
    apt: {
        type: String,
        default: "",
    },
    floor: {
        type: String,
        default: "",
    },
    otherInfo: {
        type: String,
        default: "",
    },
    business: {
        type: String,
        default: "",
    },
    RB: {
        type: Number,
        default: 1,
    },
    idUser: {
        type: Number,
        default: 0,
    },
})

module.exports = Address = mongoose.model("address", AddressSchema)