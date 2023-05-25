const express = require("express");
const app = express.Router();
const Joi = require("joi");
const { Street, Zone, Request, Route, TaxiDriver } = require("../../db");
const { outError } = require("../../utility/errors");
const { authDriver } = require("../../middleware/authDriver");

app.post("/", authDriver(), async(req, res) =>{
    const schema = Joi.object().keys({
        id: Joi.string().required(),
    })

    try{ 
       
        const data = await schema.validateAsync(req.body);
        const request = await Request.findOne({_id: data.id})

        const {departure, destination, taxiDriver, user, createdAt } = request._doc
        const date = createdAt
        const price = Math.random() * 5;

        const route = {departure, destination, price, date, taxiDriver, user }

        const _route = await Route.create(route);
        const { __v, ...rest } = _route._doc;

        const updateRequest = await Request.updateOne({_id: data.id}, {$set: {status: "accept"}})

        const updateDriver = await TaxiDriver.updateOne({_id: taxiDriver}, {$set: {status: true}})

        return res.status(201).json({ rest });

    }catch(error){
        outError(error)(req,res)
    }

})

module.exports = app