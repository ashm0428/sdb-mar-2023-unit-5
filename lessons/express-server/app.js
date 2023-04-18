const express = require("express");
const app = express();
const PORT = 4000;
const practiceController = require("./controllers/practice.controller");
const playerController = require("./controllers/player.controller");
 
app.use(express.json()); //! THIS WILL ALLOW YOU TO SEND IN YOUR PAYLOAD JSON OBJECT AND IT WILL PARSE IT FOR US - Middleware

// http://localhost:4000/
app.get("/test", (req, res) => {
    // req: REQUEST, res: RESPONSE
    res.send("Hello World");
})

app.use(express.static(`${__dirname}/public`));
app.use("/practice", practiceController);
app.use("/weather", practiceController);
app.use("/player", playerController);

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
});



