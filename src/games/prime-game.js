import gameEngine from '../index.js';
import randomElement from '../randomElement.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const calculate = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= (Math.sqrt(number)); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const number = randomElement(1, 200);
  const question = number;

  const correctAnswer = calculate(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runGame = () => {
  gameEngine(gameRule, getGameData);
};

export default runGame;
