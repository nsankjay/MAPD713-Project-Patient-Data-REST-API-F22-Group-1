const express = require('express');
const router = express.Router();
const Patients = require("../model/patientModel");

// @desc    Add and retrieve patient general details

// @route   http://localhost:3500/patients
// @access  Private
//Create a new patient record
router.post('/patients', async (req, res) => {
    const newPatient = new Patients({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        emergencyContactName: req.body.emergencyContactName,
        emergencyContactNumber: req.body.emergencyContactNumber,
        assignedDoctor: req.body.assignedDoctor,
        department: req.body.department,
    });
    try {
        const patientCreate = await newPatient.save();
        const {_id} = patientCreate._doc;
        return res.status(200).json({ message: "Patient Successfully Created", _id});
    } catch (error) {
        res.status(500).send({Error: error});
    }
})

// @route   http://localhost:3500/patients
// @access  Private
// Retrieve a list of all patients
router.get('/patients', async (req, res) => {
    try {
        const patients = await Patients.find();
        res.json(patients)
    } catch (error) {
        res.status(500).send({Error: error});
    }

})
// @route   http://localhost:3500/patients/:patientId
// @access  Private
// Retriev general details of one patient
router.get('/patients/:patientId', async (req, res) => {
    try {
        const patient = await Patients.findById(req.params.patientId);
        if (!patient) {
            res.status(404).json({message: 'Cannot Find Patient'})
        }    
        else {
            res.status(200).json({patient})
        }
    } catch (error) {
        res.status(500).send({Error: error});
    }
 })

module.exports = router;