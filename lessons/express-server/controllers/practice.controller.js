// practice.controller.js
// http:localhost:4000/practice
// ! Starting a controller for first time you will need to create a variable called router and you will need to export this variable at the end of the file

const router = require("express").Router();

// ? Create the endpoint of localhost:4000/practice/greeting
// ? REquest type: post request
// ? send back a good afternoon

router.post("/greeting", (req, res) => {
    console.log(req.body);
    res.send("Good Afternoon " + req.body.firstName )
});


// ? Create the endpoint of localhost:4000/practice/weather
// ? Request type: get request: Change this to post request
// ? send back a "It's sunny and 70 degrees outside."
// TODO: make the degrees dynamic and it be sent through the payload

router.post("/weather", (req, res) => {
    const {currentWeather} = req.body
    res.send(`It's sunny and ${currentWeather} degrees outside.`)
});


// ? Create an endpoint of localhost:4000/practice/add
// ? request type: post
// ? send back to the client: "The total of the two numbers are__"
// ? the payload should look like "{ "num1": 6, "num2": 5 }"

router.post("/add", (req, res) => {
    const {num1} = req.body;
    const {num2} = req.body;
    res.send(`The total of the two numbers is ${num1 + num2}`)
});

module.exports = router;