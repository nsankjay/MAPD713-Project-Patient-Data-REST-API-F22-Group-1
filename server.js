const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const connection = require('./config/dbConfig');
const server = express();
connection();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());

const PORT = process.env.PORT || 3500;

server.get('/test', (req, res) => {
    return res.status(200).json({ message: "Successfully" });
});

server.listen(PORT, ()=> { console.log(`Server started on port : ${PORT}`)});
