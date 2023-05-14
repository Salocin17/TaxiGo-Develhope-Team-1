const { User } = require("../db");
const { verifyUserToken } = require("../utility/auth");
const { outError } = require("../utility/errors");

const defaultOptions = {
    addUser: { enableQueryToken: true, queryTokenFieldName: "token" },
}

const authUser = (options = { ...defaultOptions.addUser }) => async (req, res, next) => {
    options = { ...defaultOptions.addUser, ...options };

    const bearerToken = options.enableQueryToken ? 
        req.headers.authorization || req.headers["authorization"] || req.query[options.queryTokenFieldName] || null
        :
        req.headers.authorization || req.headers["authorization"] || null;

    if (!bearerToken) return res.status(403).json({ message: "Not authorized"});

    if (!options.enableQueryToken && !bearerToken.startsWith("Bearer ")) return res.status(403).json({ message: "Not authorized"});

    const token = bearerToken.startsWith("Bearer ") ? bearerToken.split(" ")[1].trim() : bearerToken; // Bearer {TOKEN}

    if (!token) return res.status(403).json({ message: "Not authorized"});
    
    try {
        const decoded_token = verifyUserToken(token);

        if (!decoded_token) return res.status(403).json({ message: "Not authorized"});

        const user = await User.findOne({ _id: decoded_token._id }, '-__v -password', { lean: true });

        if (user == null) return res.status(403).json({ message: "Not authorized"});

        req.user = user;
        return next();
        
    } catch(error) {
        outError(error)(req, res,);
    }
}

module.exports = {
    authUser,
};