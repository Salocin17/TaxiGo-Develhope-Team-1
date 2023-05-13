const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const generateUserToken = (payload) => {
    if (payload === undefined) throw new Error("Payload must be specified");
    return jwt.sign(payload, process.env.SERVER_PRIVATE_KEY);
}

const verifyUserToken = (token) => {
    if (typeof token !== "string") throw new Error("Token must be a valid string");
    return jwt.verify(token, process.env.SERVER_PRIVATE_KEY)
}

const hashUserPassword = (password) => {
    if (typeof password !== "string") throw new Error("Password must be a valid string");
    return bcrypt.hashSync(password, 12);
}

const compareUserPassword = (password, hashedPassword) => {
    if (typeof hashedPassword !== "string") throw new Error("hashedPassword must be a valid string");
    if (typeof password !== "string") throw new Error("Password must be a valid string");
    return bcrypt.compareSync(password, hashedPassword)
}

module.exports = {
    generateUserToken,
    verifyUserToken,
    hashUserPassword,
    compareUserPassword,
}