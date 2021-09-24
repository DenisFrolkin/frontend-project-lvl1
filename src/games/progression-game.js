import gameEngine from '../index.js';
import randomElement from '../randomElement.js';

const gameRule = 'What number is missing in the progression?';

const makeProgression = (startNum, step, length) => {
  const progression = [startNum];
  for (let i = 1; i <= length; i += 1) {
    progression.push(startNum + i * step);
  }
  return progression;
};

const getGameData = () => {
  const startNum = randomElement(-100, 101);
  const step = randomElement(-5, 6);
  const length = randomElement(5, 11);
  const gap = randomElement(1, length - 1);
  const progression = makeProgression(startNum, step, length);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runGame = () => {
  gameEngine(gameRule, getGameData);
};

export default runGame;
