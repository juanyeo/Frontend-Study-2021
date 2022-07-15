const express = require('express')
const app = express()
const port = 5000
const path = require("path")

const cors = require("cors");
const bodyParser = require("body-parser");
const { request, response } = require('express');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "build")))
app.use("/", function (req, res, next) {
    res.sendFile(path.join(__dirname + "/build", "index.html"))
})

app.get('/getNum', (request, response) => {
    response.send({num: '5000'})
})

app.post('/postName', (request, response) => {
    const clientName = request.body.cName;
    console.log(clientName);
})

app.listen(port, () => {
    console.log(`Connected at port ${port}`);
})