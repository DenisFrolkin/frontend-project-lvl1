import gameEngine from '../index.js';
import randomElement from '../randomElement.js';

const gameRule = 'What is the result of the expression?';

const calculate = (x, y, symbol) => {
  const result = String(`${x} ${symbol} ${y}`);
  return result;
};
console.log(calculate(1, 3, '+'));

const gameBody = () => {
  const arrOfChar = ['+', '-', '*'];
  const char = arrOfChar[randomElement(0, arrOfChar.length)];
  const num1 = randomElement(0, 20);
  const num2 = randomElement(0, 20);
  const question = `${num1} ${char} ${num2}`;

  const correctAnswer = calculate(num1, num2, char);
  return [question, correctAnswer];
};

const runGame = () => {
  gameEngine(gameRule, gameBody);
};

export default runGame;
