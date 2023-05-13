const express = require("express");
const app = express.Router();
const Joi = require("joi");
const { Zone } = require("../../db");
const { outError } = require("../../utility/errors");

app.post("/",  async(req, res) =>{
    const schema = Joi.object().keys({
        name: Joi.string().required(),
    })

    try{
        const data = await schema.validateAsync(req.body);

        const _zone = await Zone.create(data);

        const { __v, ...zone } = _zone._doc;

        return res.status(201).json({ ...zone });

    }catch(error){
        outError(error)(req,res)
    }

})

module.exports = app


