import gameEngine from '../index.js';
import randomElement from '../randomElement.js';

const currentGameIntro = 'What number is missing in the progression?';

const gameBody = () => {
  const startNum = randomElement(-100, 101);
  const step = randomElement(-5, 6);
  const length = randomElement(5, 11);
  const gap = randomElement(1, length - 1);
  const progression = [];
  const currentGameQuestion = () => {
    let i = startNum;
    let j = 1;
    for (; j <= length; i += step, j += 1) {
      progression.push(i);
    }
    progression[gap] = '..';
    return progression.join(' ');
  };

  const currentGameCorrectAnswer = () => String(progression[gap + 1] - step);

  return [currentGameQuestion(), currentGameCorrectAnswer()];
};

const runGame = () => {
  gameEngine(currentGameIntro, gameBody);
};

export default runGame;
