import gameEngine from '../index.js';
import randomElement from '../randomElement.js';

const currentGameIntro = 'What number is missing in the progression?';

const gameBody = () => {
  const startNum = randomElement(-100, 101);
  const step = randomElement(-5, 6);
  const length = randomElement(5, 11);
  const x = randomElement(1, length);
  const res = [];
  const currentGameQuestion = () => {
    let i = startNum;
    for (; i <= length; i += step) {
      res.push(i);
    }
    res[x] = '..';
    return res;
  };

  const currentGameCorrectAnswer = () => (res[x + 1] - step);

  return [currentGameQuestion, currentGameCorrectAnswer];
};

const findProgressionElement = () => {
  gameEngine(currentGameIntro, gameBody);
};

export default findProgressionElement;
