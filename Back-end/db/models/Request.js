const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const RequestSchema = new Schema({
    departure: {
        type: String,
        required: true,
    },
    destination : {
        type: String,
        required: true,
    },
    taxiDriver: {
        type: Schema.Types.ObjectId,
        ref: "TaxiDriver",
        default: null
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        default: null
    }
}, { timestamps: true, strict: true });

const Request = model("Request", RequestSchema);

module.exports = Request;