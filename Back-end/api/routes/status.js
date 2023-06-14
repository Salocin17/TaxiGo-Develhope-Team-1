const express = require("express");
const app = express.Router();
const Joi = require("joi");
const { TaxiDriver } = require("../../db");
const { outError } = require("../../utility/errors");
const { authDriver } = require("../../middleware/authDriver");

app.get("/", authDriver(), async(req, res) =>{

    try{ 
        // console.log(req.user)
        const update = await TaxiDriver.updateOne({_id: req.user._id}, {$set: {status: false}})
        res.status(200).json({update})

    }catch(error){
        outError(error)(req,res)
    }

})

module.exports = app