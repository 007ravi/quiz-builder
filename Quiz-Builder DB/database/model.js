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
    Questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
    Time: Number
});

const result = new Schema({
    createdAt: { type: Date, default: Date.now },
    Percentage: String,
    User: { type: Schema.Types.ObjectId, ref: 'Users' },
    Test : { type: Schema.Types.ObjectId, ref: 'Tests' }
})

module.exports.resultModal = mongoose.model("Results", result, "Results");
module.exports.userModel = mongoose.model("Users", user, "Users");
module.exports.questionModel = mongoose.model("Question", question, "Question");
module.exports.testModel = mongoose.model("Tests", test, "Tests");