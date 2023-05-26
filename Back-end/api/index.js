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

app.use("/status", require("./routes/status"));

app.use("/zone", require("./routes/zone"));
app.use("/delete", require("./routes/delete"));
app.use("/accept", require("./routes/accept"));

app.use("/street", require("./routes/street"));

app.use("/getStreet", require("./routes/getStreet"));

app.use("/route", require("./routes/route"));
/**
 * @path /api/driver -> "/api/routes/getDriver.js"
 */
app.use("/aStreet", require("./routes/streets"));

app.use("/update", require("./routes/update"));

app.use("/driver", require("./routes/getDriver"));
app.use("/user", require("./routes/getUser"));

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

