const { outError } = require("../utility/errors");

const update = async (User, req, res, data) =>{    

    try{
        const update = await User.update({_id: req.user._id}, {$set: {
            email: data.email, 
            first_name: data.first_name, 
            last_name: data.last_name,  
            birth: data.birth,
            city: data.city,
            province: data.province,
            number: data.number
        }})

        if(data.license){
            const update = await User.update({_id: req.user._id}, {$set: {
                license: data.license
            }})
        }
        res.sendStatus(200)
    }catch(error){
        outError(error)(req,res)
    }
}

module.exports = {
    update,
}


