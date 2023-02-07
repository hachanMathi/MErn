const express = require('express')
const employ = require('../models/employeeModel')

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        console.log("venkat");
        const employeeDetails = await employ.find({})
        console.log("employeeDetails--->",employeeDetails);
        res.status(200).json(employeeDetails)
    }
    catch {
        console.log("get employees error");
    }
})

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const employeeDetail = await employ.findById( id )
        res.status(200).json(employeeDetail)
    }
    catch {
        console.log("get employees error");
    }

})

router.post("/", async (req, res) => {
    const { employeeName, department } = req.body;
    try {
        const data = await employ.create({ employeeName, department })
        res.status(200).json(data)
    }
    catch {
        console.log("post error");
    }
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const employeeDetail = await employ.findOneAndDelete( id )
        res.status(200).json(employeeDetail)
    }
    catch {
        console.log("get employees error");
    }

})

router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const employeeDetail = await employ.findOneAndUpdate({ _id : id } , {...req.body})
        res.status(200).json(employeeDetail)
    }
    catch {
        console.log("get employees error");
    }
})

module.exports = router 