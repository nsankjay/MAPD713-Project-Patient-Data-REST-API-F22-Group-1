const mongoose = require('mongoose');

const patientTestSchema = new mongoose.Schema({
    patientId: {type: String, required: true},
    dateTime: {type: String, required: true},
    bloodPressure: {type: String, required: true},
    respiratoryRate: {type: String, required: true},
    bloodOxygenLevel: {type: String, required: true},
    heartbeatRate: {type: String, required: true},
    nurseName: {type: String, required: true},
    criticalStatus: {type: Boolean, default: false},
});

module.exports = mongoose.model('PatientTest', patientTestSchema);