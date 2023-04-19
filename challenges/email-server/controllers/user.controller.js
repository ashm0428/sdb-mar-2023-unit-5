const router = require("express").Router();
const dbPath = "./assets/users.json";
const fs = require("fs");
// const { userInfo } = require("os");

let userInfoArray = [];
let userName = "";
let password = "";


router.post("/register", (req, res) => {
    userInfoArray = read();
    try {
        const {userName, password} = req.body
        const userInfo = {
            userName: userName,
            password: password,
        };
        userInfoArray.push(userInfo);
        const isSaveComplete = save(userInfoArray);

        res.json({message: isSaveComplete? "User Info Added" : "Unable to save user info", user: isSaveComplete? userInfoArray : userInfoArray.slice(-1)});

    } catch (error) {
        console.error(error);
    }
});

router.post("/login", (req, res) => {
    userInfoArray = read();
    try {
        let passwordCheck = false;
        const {userName, password} = req.body;
        
        passwordCheck = findOne(userName, password);

        if(passwordCheck === true) {
            res.json({message: `Welcome back, ${userName}`});
        } else {
            res.json({message: "Password is incorrect."})
        }
    } catch (error) {
        console.error(error);
    }
})




function findOne(userName, password) {
    for (let i = 0; i < userInfoArray.length; i++) {
      if (userName === userInfoArray[i].userName) {
        let passwordCheck = comparePasswords(password, userInfoArray[i].password)
        return passwordCheck;
      } 
    }
    return {};
  }


function comparePasswords(suppliedPassword, actualPassword) {
    passwordCheck = suppliedPassword === actualPassword;
    return passwordCheck;
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