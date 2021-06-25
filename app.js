const express = require("express");
const app = express();
const mongoose = require("mongoose")


// const port = process.env.PORT || 8000;
app.listen(process.env.PORT || 5000, () => {
    console.log("started at port 5000 ")
});


mongoose.connect("mongodb://localhost:27017/user", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((data) => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.use("/", (req, res) => {
    res.status(201).json({ status: "sucess", data: "Hello" })
})