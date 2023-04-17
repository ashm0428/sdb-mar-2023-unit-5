// This array will be provided.
let usersArray = [
    { email: "test1@test.com", password: "test" },
    { email: "test2@test.com", password: "test2" },
    { email: "test3@test.com", password: "test3" },
  ];
  
  // create a function that takes only one parameter (email) End it will search the array of user array to see if we found a match. If it finds a match you will return the object of email and password. If there is no match then you'll return an empty object

 userInput = "test5@test.com"
 console.log(findOne(userInput))

  function findOne(email) {
    let userInfo = usersArray.filter((userArray) => userArray.email.includes(email));
    if(userInfo.length > 0) {
        return {email: userInfo[0].email, password: userInfo[0].password}
    } else {
        return {};
    };
  }
  
  // ! Example: findOne("test1@test.com") // Expected Output: {email: "test1@test.com", password: "test"}
  
  // ! Example: findOne("test5@test.com") // Expected Output: {}