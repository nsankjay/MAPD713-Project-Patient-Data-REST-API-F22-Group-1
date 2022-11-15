const express = require('express');
const router = express.Router();
const Patients = require("../model/patientModel");

// @desc    Add patient general details
// @route   http://localhost:3500/patients
// @access  Private
router.post('/', async (req, res) => {
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
        criticalStatus: req.body.criticalStatus,
    });
    try {
        const patientCreate = await newPatient.save();
        const {_id} = patientCreate._doc;
        return res.status(200).json({ message: "Patient Successfully Created", _id});
    } catch (error) {
        res.status(500).send({Error: error});
    }
})

// @desc    Retrieve List of all patients
// @route   http://localhost:3500/patients
// @access  Private
router.get('/', async (req, res) => {
    try {
        const patients = await Patients.find();
        res.json(patients)
    } catch (error) {
        res.status(500).send({Error: error});
    }

})
// @desc    Retrieve List of all Critical Patients
// @route   http://localhost:3500/patients/criticalStatus
// @access  Private
router.get('/criticalStatus', async (req, res) => {
    try {
        const patients = await Patients.find({criticalStatus: true});
        res.json(patients)
    } catch (error) {
        res.status(500).send({Error: error});
    }

})

// @desc    Retriev details of a single patient
// @route   http://localhost:3500/patients/:patientId
// @access  Private
router.get('/:patientId', async (req, res) => {
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

 // @desc   Update critical status of a single patient in Patients Table
// @route   http://localhost:3500/patients/criticalStatus/:patientId
// @access  Private
router.put('/criticalStatus/:patientId', async (req, res) => {
    try {
        const patient = await Patients.findByIdAndUpdate(req.params.patientId, {criticalStatus: req.body.criticalStatus});
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