var express = require("express");
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;

router.post("/", function (req, res, next) {

    const data = req.body.data

  MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    if (err) {
      console.log(err);
    } else {
      client
        .db("WebOs")
        .collection("userObj").insertOne(data).then(()=>{
            console.log("new obj added")
        })
    }
  });
});

module.exports = router;
