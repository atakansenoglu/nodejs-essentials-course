const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// function to collect answers and push them into an array
module.exports = (questions, done = (f) => f) => {
  // dummy function if no params been passed.
  const answers = [];
  const [firstQuestion] = questions;

  const questionAnswered = (answer) => {
    answers.push(answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      done(answers); // ???
    }
  };

  rl.question(firstQuestion, questionAnswered);
};
