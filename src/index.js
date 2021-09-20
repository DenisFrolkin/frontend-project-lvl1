import readlineSync from 'readline-sync';

const roundsCount = 3;
const gameEngine = (currentGameIntro, getGameData) => {
  console.log('Welcome to the Brain-Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  console.log(currentGameIntro);
  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  } return console.log(`Congratulations, ${name}!`);
};
export default gameEngine;
