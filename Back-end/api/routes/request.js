const express = require("express");
const app = express.Router();
const { Request } = require("../../db");
const { outError } = require("../../utility/errors");
const { authDriver } = require("../../middleware/authDriver");


app.get("/", authDriver(), async (req, res) =>{
    
    try {

        const request = await Request.find({taxiDriver: req.user._id}).populate({path: "user", select:"first_name last_name"})
        const data = []
        request.map((el)=>{
            const {__v, updatedAt, ...rest} = el._doc
            data.push(rest)
        })

        res.status(200).json(data)

    }catch(error){
        outError(error)(req, res)
    }

})

module.exports = app