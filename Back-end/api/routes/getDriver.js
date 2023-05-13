const express = require("express");
const { authDriver } = require("../../middleware/authDriver");
const app = express.Router();

/**
 * @path /api/me?key={TOKEN}
 */
app.get("/", authDriver(), (req, res) => {
    return res.status(200).json({ ...req.user });
});

module.exports = app;