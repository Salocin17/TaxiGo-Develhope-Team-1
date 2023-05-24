const express = require("express");
const Joi = require("joi");
const { User, TaxiDriver } = require("../../db");
const { compareUserPassword, generateUserToken } = require("../../utility/auth");
const { outError } = require("../../utility/errors");
const app = express.Router();

app.post("/login", async (req, res) => {
    const schema = Joi.object().keys({
        type: Joi.boolean().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
    })
    
    try {
        const data = await schema.validateAsync(req.body);
console.log(data);
        const user = data.type ? 
           await User.findOne({ email: data.email }, "-__v", { lean: true }) : 
           await TaxiDriver.findOne({ email: data.email }, "-__v", { lean: true });

        if (user == null) return res.status(403).json({ message: "User not found" });

        const is_correct_password = compareUserPassword(data.password, user.password);

        if (!is_correct_password) return res.status(403).json({ message: "User not found" });

        const token = generateUserToken({ _id: user._id, email: user.email });

        return res.status(200).json({ token });

    } catch(error) {
        outError(error)(req, res);
    }
})

module.exports = app;