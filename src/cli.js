import readlineSync from 'readline-sync';

const getUserName = () => {
	let name = readlineSync.question("May I have your name? ");
	return name;
};	

export default getUserName;
