var express = require("express");
var router = express.Router();
var user = require('./database/model.js').userModel;
var question = require('./database/model.js').questionModel;
var test = require('./database/model.js').testModel;

router.post("/loginUser", (req, res) => {
    user.find({
        Email: req.body.Email,
        Password: req.body.Password
    })
        .then((data) => {
            if (data.length) {
                res.end(JSON.stringify(data[0]));
            }
            else
                res.end("false");
        })
        .catch((err) => {
            console.log("Error While logging in User: ", err);
            res.end("false");
        });
});

router.post("/registerUser", (req, res) => {
    user.create({
        Name: req.body.Name,
        Password: req.body.Password,
        Email: req.body.Email,
        Type: req.body.Type
    })
    .then((data) => {
        res.end("registered");
    })
    .catch((err) => {
        console.log("Error While adding User: ", err);
        res.end("[]");
    })
});

router.post("/addQuestion", (req, res) => {
    question.create({
        Question: req.body.Question,
        CorrectAnswerNo: req.body.CorrectAnswerNo,
        Options: req.body.Options
    })
    .then((data) => {
        res.end(data);
    })
    .catch((err) => {
        console.log("Error While adding User: ", err);
        res.end("[]");
    })
});

router.get("/getQuestions", (req, res) => {
    question.find({})
    .then((data) => {
        res.end(JSON.stringify(data));
    })
    .catch((err) =>{
        console.log("Error in /getQuestions: ", err);
        res.end("[]");
    });
});

router.post("/deleteQuestion", (req, res) => {
    question.deleteOne({ _id: req.body.id})
    .then((data) => {
        res.end(JSON.stringify(data));
    })
    .catch((err) =>{
        console.log("Error in /getQuestions: ", err);
        res.end("[]");
    });
});

router.post("/createTest", (req, res) => {
    test.create({
        Title: req.body.Title,
        Id: req.body.Id,
        Questions: req.body.Questions
    })
    .then((data) => {
        res.end();
    })
    .catch((err) =>{
        console.log("Error in /createTest: ", err);
        res.end();
    })
});

module.exports = router;