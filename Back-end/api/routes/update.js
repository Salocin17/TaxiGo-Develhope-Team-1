const express = require("express");
const app = express.Router();
const Joi = require("joi");
const { TaxiDriver, Street, User } = require("../../db");

const { authDriver } = require("../../middleware/authDriver");
const { authUser } = require("../../middleware/authUser");
const { update } = require("../../utility/update");
const { outError } = require("../../utility/errors");


app.patch("/user", authUser(), async (req, res) =>{  
    const schema = Joi.object().keys({
        email: Joi.string().allow(''),
        first_name: Joi.string().allow(''),
        last_name: Joi.string().allow(''),
        birth: Joi.string().allow(''),
        number: Joi.number().allow(''),
    }).min(1);

    try {
        const data = await schema.validateAsync(req.body);
        update(User, req, data, res)
    }catch(error){
        outError(error)(req,res)
    }

})

app.patch("/taxiDriver", authDriver(), async (req, res) =>{    
    const schema = Joi.object().keys({
        email: Joi.string().required(),
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        birth: Joi.string().required(),
        city: Joi.string().required(),
        province: Joi.string().required(),
        number: Joi.number().required(),
        license: Joi.string().required(),
    });

    try {
        const data = await schema.validateAsync(req.body);
        update(TaxiDriver, req, res, data)
    }catch(error){
        outError(error)(req,res)
    }
    
})

module.exports = app;
