const express = require("express");
const app = express.Router();

/**
 * @path /api/auth -> "/api/routes/auth.js"
 */
app.use("/auth", require("./routes/auth"));

/**
 * @path /api/taxiDrivers -> "/api/routes/taxiDrivers.js"
 */
app.use("/taxiDrivers", require("./routes/taxiDrivers"));

app.use("/taxi", require("./routes/taxi"));

app.use("/zone", require("./routes/zone"));

app.use("/street", require("./routes/street"));
app.use("/route", require("./routes/route"));
/**
 * @path /api/driver -> "/api/routes/getDriver.js"
 */

app.use("/update", require("./routes/update"));

app.use("/driver", require("./routes/getDriver"));

app.use("/location", require("./routes/location"));

app.use("/requests", require("./routes/requests"));
app.use("/request", require("./routes/request"));
app.use("/getRoute", require("./routes/getRoute"));



/**
 * @path /api/user -> "/api/routes/getUser.js"
 */

app.use("/user", require("./routes/getUser"));

/**
 * @path /api/users -> "/api/routes/users.js"
 */
app.use("/users", require("./routes/users"));

module.exports = app;

