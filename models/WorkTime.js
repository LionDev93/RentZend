const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const WorkTimeSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'users'},
    monday: {
        type: String,
        default: "",
    },
    tuesday: {
        type: String,
        default: "",
    },
    wednesday: {
        type: String,
        default: "",
    },
    thursday: {
        type: String,
        default: ""
    },
    friday: {
        type: String,
        default: ""
    },
    saturday: {
        type: String,
        default: ""
    },
    sunday: {
        type: String,
        default: ""
    },
    restaurantId: {
        type: Number,
        default: 0
    },
})

module.exports = WorkTime = mongoose.model("workTime", WorkTimeSchema)