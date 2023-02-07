const mongoose = require('mongoose')

const Schema = mongoose.Schema

const employeeSchema = Schema({
    employeeName: {
        type: String
    },
    department: {
        type: String
    }

})

module.exports = mongoose.model('sample', employeeSchema)