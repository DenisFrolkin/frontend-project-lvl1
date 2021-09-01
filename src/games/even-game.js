import gameEngine from '../index.js';
import randomElement from '../randomElement.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const calculate = (number) => number % 2 === 0;

const gameBody = () => {
  const question = randomElement(1, 1000000);

  const correctAnswer = calculate(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runGame = () => {
  gameEngine(gameRule, gameBody);
};

export default runGame;
