const express = require("express");
const app = express.Router();
const Joi = require("joi");
const { TaxiDriver, Request } = require("../../db");
const { outError } = require("../../utility/errors");
const { authUser} = require("../../middleware/authUser");

app.patch("/", authUser(), async(req, res) =>{
    const schema = Joi.object().keys({
        id: Joi.string().required(),
    })
    try{ 
        const data = await schema.validateAsync(req.body);

        const status = await Request.deleteOne({_id: data.id})
        res.status(200).json(status)

    }catch(error){
        outError(error)(req,res)
    }

})

module.exports = app