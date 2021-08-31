import gameEngine from '../index.js';
import randomElement from '../randomElement.js';

const currentGameIntro = 'Find the greatest common divisor of given numbers.';

const gameBody = () => {
  const num1 = randomElement(1, 101);
  const num2 = randomElement(1, 101);
  const currentGameQuestion = () => `${num1} ${num2}`;
  const currentGameCorrectAnswer = () => {
    if (num1 % num2 === 0) {
      return String(num2);
    }
    if (num2 % num1 === 0) {
      return String(num1);
    }
    let res = 0;
    for (let i = Math.floor(num1 / 2); i > 0;) {
      if (num1 % i === 0 && num2 % i === 0) {
        res = i;
        return String(res);
      } i -= 1;
    } return String(res);
  };
  return [currentGameQuestion(), currentGameCorrectAnswer()];
};

const runGame = () => {
  gameEngine(currentGameIntro, gameBody);
};

export default runGame;
