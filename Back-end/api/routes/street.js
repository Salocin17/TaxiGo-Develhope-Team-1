const express = require("express");
const app = express.Router();
const Joi = require("joi");
const { Street, Zone } = require("../../db");
const { outError } = require("../../utility/errors");

app.post("/", async(req, res) =>{
    const schema = Joi.object().keys({
        name: Joi.string().required(),
        zone: Joi.string().required(),
    })

    try{ 
        const data = await schema.validateAsync(req.body);
        const {_id} = await Zone.findOne({name : data.zone}, {lear : true})
        data.zone = _id
        const _street = await Street.create(data);
        const { __v, ...street } = _street._doc;
        return res.status(201).json({ ...street });

    }catch(error){
        outError(error)(req,res)
    }

})

module.exports = app