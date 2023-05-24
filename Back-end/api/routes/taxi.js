const express = require("express");
const app = express.Router();
const Joi = require("joi");
const { TaxiDriver, Zone, Street } = require("../../db");
const { authUser } = require("../../middleware/authUser");


app.get("/", authUser(), async (req, res) =>{

    const street = await Street.findOne({_id: req.user.street});
    if(!street) return res.status(403).json({ message: "Not found"});

    const zone = await Zone.findOne({_id: street.zone})

    const streets = await Street.find({zone: zone._id})

    const element = (streets) => {
        const promise = streets.map((el) => {
            return TaxiDriver.find({street: el._id, status: false}).then(res => {
                return res
            })
        });  
        return promise
    }

    Promise.all(element(streets)).then(result =>{
        const taxi = []
        result.map(el => {
            el.map(element => {
                const {__v, updatedAt, createdAt, email, password, birth, city, province, number, license, ...rest} = element._doc
                taxi.push(rest)
            })
               
        }) 
        console.log(taxi)
        res.status(200).send(taxi)  
    })
    
    res.status(200)  
})
    

module.exports = app