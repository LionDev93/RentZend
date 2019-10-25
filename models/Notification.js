const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const NotificationSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'users'},
    notification: {
        type: String,
        default: "",
    },
    date: {
        type: String,
        default: "",
    },
})

module.exports = Notification = mongoose.model("notification", NotificationSchema)