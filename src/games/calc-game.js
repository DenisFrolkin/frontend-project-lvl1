import gameEngine from '../index.js';
import randomElement from '../randomElement.js';

const gameRule = 'What is the result of the expression?';

const calculate = (x, y, symbol) => {
  let result = '';
  switch (symbol) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    default:
      result = null;
      break;
  }
  return result;
};

const getGameData = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[randomElement(0, operators.length)];
  const num1 = randomElement(0, 20);
  const num2 = randomElement(0, 20);
  const question = `${num1} ${operator} ${num2}`;

  const correctAnswer = calculate(num1, num2, operator);
  return [question, correctAnswer];
};

const runGame = () => {
  gameEngine(gameRule, getGameData);
};

export default runGame;
