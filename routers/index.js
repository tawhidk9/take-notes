const express = require("express");
const { clog } = require('../middleware/clog');

const noteRouter = require("./notes.js");

const app = express();

app.use("/notes", noteRouter);
app.use(clog);

module.exports = app;