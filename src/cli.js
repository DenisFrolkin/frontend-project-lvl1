const name = (user) => {
  let userName = readlineSync.question("May I have your name? ");
  console.log("Hello, " + userName + "!");
};
export default name;
