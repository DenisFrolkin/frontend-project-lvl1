import gameEngine from '../index.js';
import randomElement from '../randomElement.js';

const currentGameIntro = 'What number is missing in the progression?';

const gameBody = () => {
  const startNum = randomElement(-100, 101);
  const step = randomElement(-5, 6);
  const length = randomElement(5, 11);
  const x = randomElement(1, length - 1);
  const res = [];
  const currentGameQuestion = () => {
    let i = startNum;
    let j = 1;
    for (; j <= length; i += step, j += 1) {
      res.push(i);
    }
    res[x] = '..';
    return res.join(' ');
  };

  const currentGameCorrectAnswer = () => String(res[x + 1] - step);

  return [currentGameQuestion(), currentGameCorrectAnswer()];
};

const runGame = () => {
  gameEngine(currentGameIntro, gameBody);
};

export default runGame;
