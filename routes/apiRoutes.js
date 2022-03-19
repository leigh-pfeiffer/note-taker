const res = require('express/lib/response');
const fs = require('fs')
const {
    v4: uuidv4
} =require('uuid');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            let notes = JSON.parse(data);
            res.json(notes);
        });
    });

