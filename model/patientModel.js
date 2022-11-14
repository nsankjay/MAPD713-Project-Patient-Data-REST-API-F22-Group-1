const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    dateOfBirth: {type: String, required: true},
    address: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    email: {type: String, required: true},
    emergencyContactName: {type: String, required: true},
    emergencyContactNumber: {type: String, required: true},
    assignedDoctor: {type: String, required: true},
    department: {type: String, required: true},
    criticalStatus: {type: Boolean, default: false},
});

module.exports = mongoose.model('Patient', patientSchema);