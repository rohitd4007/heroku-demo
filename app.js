const express = require("express");
const app = express();


const port = process.env.port || 8080;
app.listen(port, () => {
    console.log("started at port 8080 ")
});

app.use("/", (req, res) => {
    res.status(201).json({ status: "sucess", data: "Hello" })
})