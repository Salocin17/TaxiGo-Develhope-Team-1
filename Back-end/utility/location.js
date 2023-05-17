const { outError } = require("../utility/errors");

const update = async (User, req, res) =>{    

    try{

        const _street = await Street.findOne({name: req.params.street})
        console.log(_street._doc)

        const update = await User.updateOne({_id: req.user._id}, {$set: {street: _street._doc._id}})
        res.sendStatus(200)
    }catch(error){
        outError(error)(req,res)
    }

}

module.exports = {
    update,
}


