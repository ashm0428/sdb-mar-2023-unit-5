const express = require("express");
const app = express();
const PORT = 4000;
const userController = require("./controllers/user.controller");

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use("/user", userController);

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
  });

