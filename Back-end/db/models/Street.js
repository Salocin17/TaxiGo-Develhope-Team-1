const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const StreetSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    zone:{
        type: Schema.Types.ObjectId,
        ref: "Zone",
        required: true,
    }
}, { timestamps: true, strict: true });

const Street = model("Street", StreetSchema);

module.exports = Street;