const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    birth:{
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    province: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    street: {
        type: Schema.Types.ObjectId,
        ref: "Street",
        default: null
    }
    // createdAt,
    // updatedAt
}, { timestamps: true, strict: true });

const User = model("User", UserSchema);

module.exports = User;