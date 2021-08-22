import gameEngine from '../index.js'
import randomElement from "./randomElement.js";
import readlineSync from 'readline-sync';

const currentGameIntro = console.log('What is the result of the expression?');

const arrOfChar = [+, -, *];
const char = arrOfChar[randomElement(0, 2)];
const num1 = randomElement(0, 20);
const num2 = randomElement(0, 20);

const currentGameQuestion = () => {
   console.log(num1, char, num2);
};

const currentGameCorrectAnswer = () => {
   if (char === '+') {
      console.log(num1 + num2);
   } else if (char === '-') {
      console.log(num1 - num2);
   } else console.log(num1 * num2);
};

const isResult = () => {

gameEngine(currentGameIntro, currentGameQuestion, currentGameCorrectAnswer));

};

export default isResult;
