const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ProfileSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'users'},
    gender: {
        type: String,
        default: "Male",
    },
    languageforCorrespondance: {
        type: String,
        default: "",
    },
    dateOfBirth: {
        type: String,
        default: "",
    },
    homePhone: {
        type: String,
        default: "",
    },
    workPhone: {
        type: String,
        default: "",
    },
    placeOfOrigin: {
        type: String,
        default: "",
    },
    placeOfBirth: {
        type: String,
        default: "",
    },
    nationality: {
        type: String,
        default: "",
    },
    address: {
        type: String,
        default: "",
    },
    address2: {
        type: String,
        default: "",
    },
    postCode: {
        type: String,
        default: "",
    },
    townCity: {
        type: String,
        default: "",
    },
    country: {
        type: String,
        default: "",
    },
    avatar: {
        type: String,
        default: "",
    },

})

module.exports = Profile = mongoose.model("profile", ProfileSchema)