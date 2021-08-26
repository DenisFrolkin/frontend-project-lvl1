import gameEngine from '../index.js';
import randomElement from '../randomElement.js';

const currentGameIntro = 'What is the result of the expression?';

const gameBody = () => {
  const arrOfChar = ['+', '-', '*'];
  const char = arrOfChar[randomElement(0, 3)];
  const num1 = randomElement(0, 20);
  const num2 = randomElement(0, 20);
  const currentGameQuestion = () => `${num1} ${char} ${num2}`;

  const currentGameCorrectAnswer = () => {
    if (char === '+') {
      return String(num1 + num2);
    } if (char === '-') {
      return String(num1 - num2);
    } return String(num1 * num2);
  };
  return [currentGameQuestion(), currentGameCorrectAnswer()];
};

const isResult = () => {
  gameEngine(currentGameIntro, gameBody);
};

export default isResult;
