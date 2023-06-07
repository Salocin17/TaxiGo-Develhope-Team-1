const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const RouteSchema = new Schema({
    departure: {
        type: String,
        required: true,
        ref:"Street"
    },
    destination : {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    date: {
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

const Route = model("Route", RouteSchema);

module.exports = Route;