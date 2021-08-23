import gameEngine from '../index.js';
import randomElement from '../randomElement.js';

const currentGameIntro = 'Find the greatest common divisor of given numbers.';

const gameBody = () => {
  const num1 = randomElement(1, 101);
  const num2 = randomElement(1, 101);
  const currentGameQuestion = () => `${num1} ${num2}`;
  

  const currentGameCorrectAnswer = () => {
    if (num1 % num2 === 0) {
      return num2;
    }
    if (num2 % num1 === 0 ) {
      return num1;
    };
    for (let i = Math.floor(num1 / 2); i > 0; ) {
      if (num1 % i === 0 && num2 % i === 0) {
        return i;
      } i -= 1;
    }
  };
  return [currentGameQuestion(), currentGameCorrectAnswer()];
};

const findGcd = () => {
  gameEngine(currentGameIntro, gameBody);
};

export default findGcd;
