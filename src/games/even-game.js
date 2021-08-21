import readlineSync from 'readline-sync';
import randomElement from '../randomElement.js';

const isEven = () => {
  console.log('Welcome to the Brain-Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const questionNum = randomElement(1, 1000000);
    console.log(`Question: ${questionNum}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = questionNum % 2 === 0 ? 'yes' : 'no';
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else return console.log(`'${answer}' is wrong answer ;(. correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
  } return console.log(`Congratulations, ${name}!`);
};
export default isEven;
