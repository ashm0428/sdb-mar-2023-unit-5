let myArray = [
    {
    "firstName":"CRISTIANO",
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

function removeOne(indexNumber) {
    let newArray = [];
    for (let i = 0; i < myArray.length; i++) {
      if (i !== indexNumber) {
        newArray.push(myArray[i]);
      }
    }
    return newArray;
  }
  console.log(removeOne(0));
