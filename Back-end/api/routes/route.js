const express = require("express");
const app = express.Router();
const Joi = require("joi");
const { Street, Zone, Request, Route, TaxiDriver } = require("../../db");
const { outError } = require("../../utility/errors");
const { authUser } = require("../../middleware/authUser");
const { authDriver } = require("../../middleware/authDriver");

app.post("/", authDriver(), async(req, res) =>{
    const schema = Joi.object().keys({
        id: Joi.string().required(),
        distance: Joi.number().required()
    })

    try{ 
       
        const data = await schema.validateAsync(req.body);
        const request = await Request.findOne({_id: data.id})

        console.log(request)
        const {departure, destination, taxiDriver, user, createdAt } = request
        const date = createdAt
        const price = 3 + 1.15 * data.distance;

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

app.get("/", authUser(), async (req, res) => {
  
    try {

        const route = await Route.find({user: req.user._id}).populate({path:"departure", select:"name"})
        return res.status(201).json(route);


    }catch(error){
        outError(error)(req, res)
    }
});

module.exports = app