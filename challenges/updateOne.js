let myArray = [
    {
    "firstName":"CRIDSTIANO",
    "lastName":"RONALDO",
    "position":"Striker",
    "team":"Al-Nasrr",
    "jerseyNumber":"7"
    },
    {
    "firstName":"ASHLEE",
    "lastName":"LINDSTROM",
    "position":"Goalie",
    "team":"Upright",
    "jerseyNumber":"12"
    },
    {
    "firstName":"GRANT",
    "lastName":"LINDSTROM",
    "position":"Defender",
    "team":"Grand Mesa",
    "jerseyNumber":"10"
    },
    {
    "firstName":"JAMES",
    "lastName":"PAGE",
    "position":"Striker",
    "team":"Misery",
    "jerseyNumber":"2"
    },
]

let bobur =  {
    firstName: "BOBUR",
    lastName: "NURULLAHONOV",
    position: "student",
    team: "Upright",
    jerseyNumber: "6"
}

function updateOne(indexNumber, newObject) {
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


  console.log(updateOne(0, bobur));