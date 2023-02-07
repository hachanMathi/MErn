require('dotenv').config()

const express = require('express')
const employeeRoute = require("./routes/employee")
const cors = require("cors");

const mongoose = require("mongoose")
mongoose.set('strictQuery', false);

//express app
const app = express()

//middleware

app.use(express.json())
app.use(cors());

app.use((req, res, next) => {
    console.log("req.method", req.method);
    console.log("req.path", req.path);
    next()
})

//routes
app.use("/api/employee", employeeRoute);

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        //port
        app.listen(process.env.port, () => {
            console.log("running ", process.env.port);
        })
    })
    .catch(() => {
        console.log("error", error);
    })



