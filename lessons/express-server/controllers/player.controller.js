const router = require("express").Router();
//! dbPath is the file path to the data, based off of the relationship of the app.js file
const dbPath = "./assets/player-db.json";

const fs = require("fs");
//! FS give us access to the file system that is built-in with node
// https:localhost:4000/player/add

let playerArray = [];
//firstName, lastName, position, team, jerseyNumber
//! Add a player to the array

router.post("/add", (req, res) => {
    let playerArray = read();
try {
        // 1. Pull out the keys from the req.body
        const {firstName, lastName, position, team, jerseyNumber} = req.body;
        // 2. Create the object so it will be inserted into the playerArray
        const playerObject = {
            firstName: firstName.toUpperCase(),
            lastName: lastName.toUpperCase(),
            position: position,
            team: team,
            jerseyNumber: jerseyNumber,
        };

        // 3. Add the players ot the Array and write the completed array back to the file
        playerArray.push(playerObject);
        const isSaveComplete = save(playerArray);

        // 4. Send back a response to the client that you have added the data
        res.json({message: isSaveComplete? "Player Added" : "We had a problem saving", player: isSaveComplete? playerArray : playerArray.slice(-1)});
} catch (error) {
    res.json({message: error.message})
}
});

//! Get all the players

router.get("/view-all", (req, res) => {
    let playerArray = read();
    try {
        res.json({message: "all players", player: playerArray});
    } catch (error) {
        res.json({message: error.message})
    }
})


function read() {
    const file = fs.readFileSync(dbPath);
    return JSON.parse(file);
}

function save(data) {
    try {
      fs.writeFileSync(dbPath, JSON.stringify(data));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }



module.exports = router;