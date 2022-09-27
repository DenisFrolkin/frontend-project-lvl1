import readlineSync from 'readline-sync';

const roundsCount = 3;
const gameEngine = (intro, getGameData) => {
  console.log('Welcome to the Brain-Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  console.log(intro);
  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (String(correctAnswer) !== answer) {
      console.log(`'${answer}' is wrong answer ;(. correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default gameEngine;
