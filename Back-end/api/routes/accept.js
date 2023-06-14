const express = require("express");
const app = express.Router();
const Joi = require("joi");
const { TaxiDriver, Request } = require("../../db");
const { outError } = require("../../utility/errors");
const { authUser} = require("../../middleware/authUser");

app.get("/:id", authUser(), async(req, res) =>{

    try{ 
        const status = await Request.findOne({_id: req.params.id})
        // console.log(status)
        res.status(200).json(status.status)

    }catch(error){
        outError(error)(req,res)
    }

})

module.exports = app