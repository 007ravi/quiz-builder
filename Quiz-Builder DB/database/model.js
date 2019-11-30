const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const question = new Schema({
    Question: String,
    Options: [],
    CorrectAnswerNo: Number
});

const user = new Schema({
    Name: String,
    Password: String,
    Email: String,
    Type: String
});

const test = new Schema({
    Title: String,
    Id: String,
    Questions: [],
    TestAttendees: []
});

module.exports.userModel = mongoose.model("Users", user, "Users");
module.exports.questionModel = mongoose.model("Question", question, "Question");
module.exports.testModel = mongoose.model("Tests", test, "Tests");