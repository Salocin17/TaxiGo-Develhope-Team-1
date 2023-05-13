const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const ZoneSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
}, { timestamps: true, strict: true });

const Zone = model("Zone", ZoneSchema);

module.exports = Zone;