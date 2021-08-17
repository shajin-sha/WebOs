var express = require("express");
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;

router.post("/", function (req, res, next) {
  const userName = req.body.userName;
  let err = false;

  if (userName === null) {
    err = true;
  } else if (userName === "undefined") {
    err = true;
  } else {
    MongoClient.connect("mongodb://localhost:27017", (err, client) => {
      if (err) {
        console.log(err);
      } else {
        client.db("WebOs").collection("userObj").find().toArray((err,data)=>{
            if(err) throw err;
            console.log(data)

        })
      }
    });
  }
});

module.exports = router;
