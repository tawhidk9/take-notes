const notes = require("express").Router();
const { readAndAppend, readFromFile} = require('../helpers/fsUtils.js')
const { v4: uuidv4 } = require('uuid');

notes.get("/", (req, res) =>{
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


notes.get("/", (req,res) =>{
    res.json(JSON.parse(data)[req.params.id]);
});

notes.post("/", (req, res) => {
    const { title, text } = req.body
    if(req.body) {
        const newTask = {title, text, id: uuidv4(),}
        readAndAppend(newTask,'./db/db.json')
        res.json('Task added Successfully!')
    } else{
        res.error('Error in posting task!')
    }
});


module.exports = notes;