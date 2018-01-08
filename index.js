const readline = require('readline');
const { Game } = require('./Game.js');

const rl = readline.createInterface({
	input: process.stdin,
  output: process.stdout
});

let game = new Game();

rl.question('Hi there!  Welcome to tic tac toe.  What\'s your first name?\nName: ', (answer) => {

  game.player1 = answer;
});


rl.on('line', (input) => {
  rl.close();

});



