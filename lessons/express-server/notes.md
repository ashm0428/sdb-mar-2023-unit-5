# Getting Started

- create a 'package.json'
  - In the terminal you can us the cli command: 'npm init -y'
- Install our dependencies
  - express: 'npm install express'
- create a '.gitignore' file
  - '/node_modules' is typed into it
- create an 'app.js' file
  - updated our 'package.json' with 'app.js' instead of 'index.js'

## Boiler Plate for Starting the Server

```js
const express = require("express");
const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
```


## CRUD (Create, Read, Update, Delete)

- Create: POST
- Read: GET
- Update: PATCH
- Delete: DELETE


## MVC
- Model, View, Controller
- View: browser, postman (what we interact with)
- Controller: part of the server application that handles the logic
- Model: database schema


## Controllers

Starting a controller for first time you will need to create a variable called router and you will need to export this variable at the end of the file.

```js
const router = require("express").Router();
module.exports = router;
```

