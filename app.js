const express = require("express");
const app = express();


// const port = process.env.PORT || 8000;
app.listen(process.env.PORT || 5000, () => {
    console.log("started at port 5000 ")
});

app.use("/", (req, res) => {
    res.status(201).json({ status: "sucess", data: "Hello" })
})