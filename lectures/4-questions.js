process.stdout.write("Hello ");
process.stdout.write("World \n\n\n");

const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?",
];

const ask = (i = 0) => {
  process.stdout.write(`\n\n\n ${questions[i]}`);
  process.stdout.write(` > `);
};

ask();

const answers = [];

// stdin.on listens for user input asynchronously
process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());

  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit(); // without this program will not stop by itself
  }
});

process.on("exit", () => {
  const [name, activity, lang] = answers;
  console.log(`
  
  Thank you for your answers.
  
  Go ${activity} ${name} you can write ${lang} code later!`);
});
