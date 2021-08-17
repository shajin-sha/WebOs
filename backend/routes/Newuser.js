var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
var MongoClient = require("mongodb").MongoClient



router.post('/', function (req, res, next) {
    let IsOk = true
    const Password = req.body.Password;
    const Email = req.body.Email;
    const UserName = req.body.UserName;

    //? valeting req data--------------

    if (Password === "") {
        IsOk = false

    }
    else if (Email === "") {
        IsOk = false

    }
    else if (UserName === "") {
        IsOk = false

    }


    if (IsOk === true) {

        //*config for bcrypt --start

        const saltRounds = 10;
        const myPlaintextPassword = Password;

        //*config for bcrypt --end



        // ?  generate hash from plain text/password --start
        // ? add new user to Database--start

        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
                if (err) {
                    console.log(err)
                }
                else {
                    //* connecting to mongodb database default port number 27017---

                    MongoClient.connect("mongodb://localhost:27017", (err, client) => {
                        if (err) {
                            console.log(err)
                        }
                        // ?  generate hash from plain text/password --start
                        else {
                            //? useing hash to database --start
                            let data = { Password: hash, Email, UserName }
                            //? useing hash to database --start
                            client.db("WebOs").collection("users").insertOne(data).then(() => {
                                

                                // *sending res to user side --start
                                res.json({ state: "ok" ,UserName:UserName})
                                // *sending res to user side --end

                                client.close()
                            })
                        }


                    })

                }

            });


        });
        // ? add new user to Database --end

    }

    else {
        res.json({ state: "err" })
    }






});

module.exports = router;



// !TODO

    // ?  compare hash from data base and return true/false

    // let hash = '$2b$10$BMsCUioQOmJ7kblARY5LOeCsv6rl6XoMGwgsGdHAUD1beg6Bns7ai'

    // bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    //     res.send(result)
    // });

