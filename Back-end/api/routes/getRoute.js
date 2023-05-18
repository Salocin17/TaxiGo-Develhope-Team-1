const express = require("express");
const { authUser } = require("../../middleware/authUser");
const { authDriver } = require("../../middleware/authDriver");
const { Route } = require("../../db");

const app = express.Router();

/**
 * @path /api/me?key={TOKEN}
 */
app.get("/user", authUser(), async (req, res) => {
  
    try {

        const request = await Route.find({taxiDriver: req.user._id})
        const data = []
        request.map((el)=>{
            const {__v, updatedAt, ...rest} = el._doc
            data.push(rest)
        })

        res.status(200).json({...data})

    }catch(error){
        outError(error)(req, res)
    }
});

app.get("/driver", authDriver(), async (req, res) => {
    try {

        const request = await Route.find({user: req.user._id})
        const data = []
        request.map((el)=>{
            const {__v, updatedAt, ...rest} = el._doc
            data.push(rest)
        })

        res.status(200).json({...data})

    }catch(error){
        outError(error)(req, res)
    }

});


module.exports = app;