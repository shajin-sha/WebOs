var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
var MongoClient = require("mongodb").MongoClient;

router.post("/", function (req, res, next) {
  // config data--start
  let data = req.body;
  let Password = data.Password;
  let UserName = data.UserName;
  // config data--end

  MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    if (err) {
      console.log(err);
    } else {
      client
        .db("WebOs")
        .collection("users")
        .findOne({ UserName: UserName }, (err, data) => {
          if (data != {}) {
            if (data.Password) {
              //  compare hash from data base and return true/false--start
              //  if the result is true let user login--action if true
              // if the result false send err--action if false
              //   ---data.Password--- is a hash from database
              //   ---Password--- is pain text that user give from frontend
              bcrypt.compare(Password, data.Password, function (err, result) {
                if (err) {
                  console.log(err);
                } else {
                  res.json({ state: result });
                }
              });
              //  compare hash from data base and return true/false--end
            }
          }
        });
    }
  });
});

module.exports = router;

// pretty()
