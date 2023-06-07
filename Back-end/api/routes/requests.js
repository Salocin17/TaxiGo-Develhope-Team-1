const express = require("express");
const app = express.Router();
const Joi = require("joi");
const { User, Request } = require("../../db");
const { outError } = require("../../utility/errors");
const { authUser } = require("../../middleware/authUser");
const {io} = require("../../socket/index")

app.post("/", authUser(), async (req, res)=>{ 
    const schema = Joi.object().keys({
        destination: Joi.string().required(),
        id: Joi.string().required(),
    });

    try{
        console.log(req.body)
        const {destination, id} = await schema.validateAsync(req.body);

        const {_id, street} = await User.findOne({_id : req.user._id})

        console.log(destination)
        const departure = street
        const user = _id
        const taxiDriver = id

        const data = {departure, destination, taxiDriver, user }

        const request = await Request.create(data);

        io.sockets.to(id).emit("receive_message", request);

        return res.status(201).json({ request });

    }catch(error){
        outError(error)(req, res)
    }
})

module.exports = app