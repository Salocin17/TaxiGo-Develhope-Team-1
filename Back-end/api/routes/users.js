const express = require("express");
const app = express.Router();
const Joi = require("joi");
const { User } = require("../../db");
const { hashUserPassword } = require("../../utility/auth");
const { outError } = require("../../utility/errors");

/**
 * Create a new user
 * @path /api/users
 */
app.post("/", async (req, res) => {
    const schema = Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required(),
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        birth: Joi.string().required(),
        city: Joi.string().required(),
        province: Joi.string().required(),
        number: Joi.number().required(),
        street: Joi.string().optional().default(null),
    });

    try {
        const data = await schema.validateAsync(req.body);

        data.password = hashUserPassword(data.password);

        const _user = await User.create(data);

        const { __v, password, ...user } = _user._doc;

        return res.status(201).json({status: "ok"});
    } catch(error) {
        outError(error)(req, res);
    }
});


// create new data -> app.post()
// get all/one data -> app.get() || app.get("/:id")
// update data -> app.patch("/:id") || app.put("/:id")
// delete data -> app.delete("/:id")

module.exports = app;