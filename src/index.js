import readlineSync from 'readline-sync';

const gameEngine = (currentGameIntro, gameBody) => {
  console.log('Welcome to the Brain-Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  console.log(currentGameIntro);
  for (let i = 1; i <= 3; i += 1) {
    const [currentGameQuestion, currentGameCorrectAnswer] = gameBody();
    const question = currentGameQuestion;
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = currentGameCorrectAnswer;
    if (correctAnswer === Number(answer)) {
      console.log('Correct!');
    } else return console.log(`'${answer}' is wrong answer ;(. correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
  } return console.log(`Congratulations, ${name}!`);
};
export default gameEngine;
