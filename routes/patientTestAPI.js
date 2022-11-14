const express = require('express');
const router = express.Router();
const PatientsTest = require("../model/patientTestModel");

// @desc    Add Patient Test details
// @route   http://localhost:3500/patients/clinicalRecords
// @access  Private
router.post('/clinicalRecords', async (req, res) => {
    const newPatientTest = new PatientsTest({
        patientId: req.body.patientId,
        dateTime: req.body.dateTime,
        bloodPressure: req.body.bloodPressure,
        respiratoryRate: req.body.respiratoryRate,
        bloodOxygenLevel: req.body.bloodOxygenLevel,
        heartbeatRate: req.body.heartbeatRate,
        nurseName: req.body.nurseName,
        criticalStatus: req.body.criticalStatus,
    });
    console.log("newPatientTest", newPatientTest)
    try {
        const patienteTestCreate = await newPatientTest.save();
        console.log("here", patienteTestCreate)
        const {_id} = patienteTestCreate._doc;
        return res.status(200).json({ message: "Patient Test Data Successfully Created", _id});
    } catch (error) {
        res.status(500).send({Error: error});
    }
    //@todo Above post API updates patient table with the criticalStatus field only
})

// @desc    Get Patient's all Test details
// @route   http://localhost:3500/patients/clinicalRecords/:patiendId
// @access  Private
// Retrieve a list of all patients
router.get('/clinicalRecords/:patiendId', async (req, res) => {
    try {
        const patientsTestResults = await PatientsTest.find({ "patientId" : req.params.patiendId });
        res.json(patientsTestResults)
    } catch (error) {
        res.status(500).send({Error: error});
    }

})

// @desc    Get a Single Patient Test details
// @route   http://localhost:3500/patients/clinicalRecords/tests/:testID
// @access  Private
// Retriev general details of one patient
router.get('/clinicalRecords/tests/:testId', async (req, res) => {
    try {
        const patientSingleTest = await PatientsTest.findById(req.params.testId);
        if(!patientSingleTest) {
            return res.status(404).json({message: 'Cannot Find Test'})
        }    
        else {
            res.status(200).json({patientSingleTest})
        }
    } catch (error) {
        res.status(500).send({Error: error});
    }
 })

module.exports = router;