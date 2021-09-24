import gameEngine from '../index.js';
import randomElement from '../randomElement.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const findGreatestCommonDivisor = (x, y) => {
  if (y !== 0) {
    return findGreatestCommonDivisor(y, x % y);
  }
  return x;
};

const getGameData = () => {
  const num1 = randomElement(1, 101);
  const num2 = randomElement(1, 101);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGreatestCommonDivisor(num1, num2));
  return [question, correctAnswer];
};

const runGame = () => {
  gameEngine(gameRule, getGameData);
};

export default runGame;
