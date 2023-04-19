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
    playerArray = read();
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


//! Delete one player
// http://localhost:4000/player/delete

router.delete("/delete/:index", (req, res) => {
    let playerArray = read();
    try {
        let index = req.params.index;
        console.log(index);
        if(isNaN(index)){
            throw Error("Error: The index provided was not a number.")
        }
        playerArray = removeOne(+index, playerArray);
        save(playerArray);
        res.json({message: "player removed", player: playerArray})
    } catch (error) {
        console.error(error)
    }
})

//! Update a Player
// http://localhost:4000/player/update/:index
router.patch("/update/:index", (req, res) => {
    let playerArray = read();
    try {
        // 1. Pull out the keys from the req.boedy
        const {firstName, lastName, position, team, jerseyNumber} = req.body;
        // 2. Create the object so it will be inserted into the playerArray
        const playerObject = {
            firstName: firstName.toUpperCase(),
            lastName: lastName.toUpperCase(),
            position: position,
            team: team,
            jerseyNumber: jerseyNumber,
        };
        // 3. Assign the index value
        let index = req.params.index;
        // 4. update the array
        playerArray = updateOne(+index, playerObject, playerArray);
        // 5. 
        save(playerArray);
        res.json({message: "player updated", player: playerArray});
    } catch (error) {
    res.json({message: error.message});
    }
})

function updateOne(indexNumber, newObject, myArray) {
    // update only that index and return the entire array.
    let newArray = [];
    for (let i = 0; i < myArray.length; i++) {
      if (i === indexNumber) {
        newArray.push(newObject)
      }else{
        newArray.push(myArray[i]);
      }
    }
    return newArray;
  }


function removeOne(indexNumber, myArray) {
    let newArray = [];
    for (let i = 0; i < myArray.length; i++) {
      if (i !== indexNumber) {
        newArray.push(myArray[i]);
      }
    }
    return newArray;
  }


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