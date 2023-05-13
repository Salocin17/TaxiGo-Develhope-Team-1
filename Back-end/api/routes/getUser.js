const express = require("express");
const { authUser } = require("../../middleware/authUser");
const app = express.Router();

/**
 * @path /api/me?key={TOKEN}
 */
app.get("/", authUser(), (req, res) => {
    return res.status(200).json({ ...req.user });
});

module.exports = app;