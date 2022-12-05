const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const connection = require('./dbconfig');
const server = express();
const authApi = require('./routes/loginAPI');
const registerApi = require('./routes/registerAPI');
const patientsApi = require('./routes/patientsAPI');
const patientTestApi = require('./routes/patientTestAPI');
connection();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());

const PORT = process.env.PORT || 3500;

server.use('/api', authApi);
server.use('/api', registerApi);
server.use('/patients', patientsApi);
server.use('/patients', patientTestApi);

server.listen(PORT, ()=> { console.log(`Server started on port : ${PORT}`)});