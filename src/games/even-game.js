import gameEngine from '../index.js';
import randomElement from '../randomElement.js';

const currentGameIntro = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameBody = () => {
  const currentGameQuestion = randomElement(1, 1000000);

  const currentGameCorrectAnswer = currentGameQuestion % 2 === 0 ? 'yes' : 'no';

  return [currentGameQuestion, currentGameCorrectAnswer];
};

const isEven = () => {
  gameEngine(currentGameIntro, gameBody);
};

export default isEven;
