const name = () => {
  var userName = readlineSync.question("May I have your name? ");
  console.log('Hello, ' + userName + '!');
};
export default name;
