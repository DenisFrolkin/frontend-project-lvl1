import readlineSync from 'readline-sync';
import randomElement from '../ramdomElement.js';

const isEven = () => {
	console.log('Welcome to the Brain-Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello ${name}!`);
	console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
	for (let i = 1; i <= 3; i += 1) {
	let num = randomElement(1, 1000000);
	const question = console.log(`Question: ${num}`);
	const answer = readlineSync.question('Your answer: ');
	let correctAnswer = num % 2 === 0 ? 'yes' : 'no';
	if (correctAnswer === answer) {
	  console.log ('Correct!');
	} else return console.log(`'${answer}' is wrong answer ;(. correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    } console.log (`Congratulations, ${name}!`);
};
export default isEven;
