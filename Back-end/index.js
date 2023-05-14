require("dotenv").config();

const express = require("express");
const app = express();

const db = require("./db");
const cors = require("cors");
const helmet = require("helmet");

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * @path /api -> "./api/index.js"
 */
app.use("/api", require("./api"));


db.connect();

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server listen on port ${process.env.SERVER_PORT}`);
});
