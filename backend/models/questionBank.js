const {model, Schema} = require("mongoose")

const qbSchema = new Schema({
  subject: String,
  setName: String,
  questions: [
    {
      question: String,
      options: [String],
    },
  ],
});

const questionBank = model("questionBank", qbSchema);
module.exports = questionBank;
