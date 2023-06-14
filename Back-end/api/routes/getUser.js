const express = require("express");
const { authUser } = require("../../middleware/authUser");
const { authDriver } = require("../../middleware/authDriver");
const { User } = require("../../db");
const { outError } = require("../../utility/errors");
const app = express.Router();
const Joi = require("joi");

/**
 * @path /api/me?key={TOKEN}
 */
app.get("/", authUser(), (req, res) => {
    return res.status(200).json({ ...req.user });
});

app.post("/driver", authDriver(), async (req, res) => {

    const schema = Joi.object().keys({
        id: Joi.string().required(),
    })

    try{
        const data = await schema.validateAsync(req.body);
        const {first_name, last_name} = await User.findOne({_id: data.id})
        res.status(200).json({first_name, last_name})

    }catch(error){
        outError(error)(req, res)
    }
});

module.exports = app;