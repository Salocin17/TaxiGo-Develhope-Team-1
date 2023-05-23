const express = require("express");
const app = express.Router();
const Joi = require("joi");
const { TaxiDriver, Street} = require("../../db");
const User = require("../../db/models/User.js")
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
        User.findOneAndUpdate({_id:req.user._id},{$set:{
            email: data.email?data.email:req.user.email,
            first_name: data.first_name?data.first_name:req.user.first_name,
            last_name: data.last_name?data.last_name:req.user.last_name,
            birth: data.birth?data.birth:req.user.birth,
            number: data.number?data.number:req.user.number
        }}).then((err,result) => {
            res.status(200).send({});
        })
    }catch(error){
        outError(error)(req,res)
    }

})

app.patch("/driver", authDriver(), async (req, res) =>{    
    const schema = Joi.object().keys({
        email: Joi.string().required(),
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        birth: Joi.string().required(),
        city: Joi.string().required(),
        province: Joi.string().required(),
        number: Joi.number().required(),
        license: Joi.string().required(),
    }).min(1);


    try {
        const data = await schema.validateAsync(req.body);
        TaxiDriver.findOneAndUpdate({_id:req.user._id},{$set:{
            email: data.email?data.email:req.user.email,
            first_name: data.first_name?data.first_name:req.user.first_name,
            last_name: data.last_name?data.last_name:req.user.last_name,
            birth: data.birth?data.birth:req.user.birth,
            number: data.number?data.number:req.user.number,
            license: data.license?data.license:req.user.license
        }}).then((err,result) => {
            res.status(200).send({});
        })
    }catch(error){
        outError(error)(req,res)
    }

    
})

module.exports = app;
