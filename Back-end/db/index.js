const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected")
    } catch(err) {
        throw err;
    }
}

const models = {
    User: require("./models/User"),
    TaxiDriver: require("./models/TaxiDriver"),
    Zone: require("./models/Zone"),
    Street: require("./models/Street"),
    Request: require("./models/Request"),
    Route: require("./models/Route"),
};

module.exports = {
    connect,
    ...models,
}