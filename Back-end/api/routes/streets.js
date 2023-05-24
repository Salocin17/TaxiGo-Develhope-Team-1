const express = require("express");
const app = express.Router();
const Joi = require("joi");
const { Street } = require("../../db");
const { outError } = require("../../utility/errors");
const { authUser } = require("../../middleware/authUser");

app.get("/:street", async (req, res) =>{
    try{ 
        const street = await Street.findOne({_id: req.params.street})

        return res.status(201).json({ street });

    }catch(error){
        outError(error)(req,res)
    }

})

module.exports = app