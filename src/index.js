import readlineSync from 'readline-sync';

const gameEngine = (currentGameIntro, gameBody) => {
  console.log('Welcome to the Brain-Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  console.log(currentGameIntro);
  const roundCount = 3;
  for (let i = 1; i <= roundCount; i += 1) {
    const [currentGameQuestion, currentGameCorrectAnswer] = gameBody();
    const question = currentGameQuestion;
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = currentGameCorrectAnswer;
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  } return console.log(`Congratulations, ${name}!`);
};
export default gameEngine;
