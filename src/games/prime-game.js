import gameEngine from '../index.js';
import randomElement from '../randomElement.js';

const currentGameIntro = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameBody = () => {
  const currentGameQuestion = randomElement(1, 200);

  const currentGameCorrectAnswer = () => {
    if (currentGameQuestion === 1) {
      return 'no';
    }
    for (let i = 2; i < (currentGameQuestion / 2); i += 1) {
      if (currentGameQuestion % i === 0) {
        return 'no';
      }
    } return 'yes';
  }; return [currentGameQuestion, currentGameCorrectAnswer()];
};

const isPrime = () => {
  gameEngine(currentGameIntro, gameBody);
};

export default isPrime;
