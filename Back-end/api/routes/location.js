const express = require("express");
const app = express.Router();
const Joi = require("joi");
const { TaxiDriver, Street, User } = require("../../db");

const { hashUserPassword } = require("../../utility/auth");

const { authDriver } = require("../../middleware/authDriver");
const { authUser } = require("../../middleware/authUser");
const { location } = require("../../utility/location");


app.patch("/user/:street", authUser(), async (req, res) =>{  
    location(User, req, res)
})

app.patch("/taxiDriver/:street", authDriver(), async (req, res) =>{    
    location(TaxiDriver, req, res)
})

// update data -> app.patch("/:id") || app.put("/:id")

module.exports = app;
