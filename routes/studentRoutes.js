const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Fetch all students
router.get("/", async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new student
router.post("/", async (req, res) => {
    const { name, age, email } = req.body;
    try {
        const newStudent = new Student({ name, age, email });
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Updating a student by ID
router.put("/:id", async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
     );
     res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Deleting a student by ID
router.delete("/:id", async (req, res) => {
    try {
        await Student.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

module.exports = router;