import gameEngine from '../index.js'
import randomElement from "../randomElement.js";
import readlineSync from 'readline-sync';

const currentGameIntro = 'What is the result of the expression?';

const gameBody = () => {
const arrOfChar = ['+', '-', '*'];
const char = arrOfChar[randomElement(0, 3)];
const num1 = randomElement(0, 20);
const num2 = randomElement(0, 20);
const currentGameQuestion = () => {
   return `${num1} ${char} ${num2}`;
};
const currentGameCorrectAnswer = () => {
   if (char === '+') {
      return (num1 + num2);
   } else if (char === '-') {
      return (num1 - num2);
   } else return (num1 * num2);
};
return [currentGameQuestion(), currentGameCorrectAnswer()];
};

const isResult = () => {

gameEngine(currentGameIntro, gameBody);
};

export default isResult;
