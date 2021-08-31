import gameEngine from '../index.js';
import randomElement from '../randomElement.js';

const currentGameIntro = 'What is the result of the expression?';

const gameBody = () => {
  const arrOfChar = ['+', '-', '*'];
  const char = arrOfChar[randomElement(0, arrOfChar.length)];
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

const runGame = () => {
  gameEngine(currentGameIntro, gameBody);
};

export default runGame;
