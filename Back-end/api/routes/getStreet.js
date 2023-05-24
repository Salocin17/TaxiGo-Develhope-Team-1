const express = require("express");
const app = express.Router();
const Joi = require("joi");
const { Street } = require("../../db");
const { outError } = require("../../utility/errors");

app.get("/", async (req, res) =>{
    try{ 
        const street = await Street.find()

        return res.status(201).json({ street });

    }catch(error){
        outError(error)(req,res)
    }

})

module.exports = app