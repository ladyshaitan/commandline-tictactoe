const readline = require('readline');
const { Game } = require('./Game.js');
const art = require('ascii-art');

const rl = readline.createInterface({
	input: process.stdin,
  output: process.stdout
});

let game = new Game();
rl.setPrompt('>');
rl.prompt();
console.log(art.font('Tic Tac Toe'));
rl.question('Hi there!  Welcome to tic tac toe.  What\'s your first name?\nName: ', (answer) => {
  game.player1 = answer;
});


rl.on('line', (input) => {
  console.log('input', input);
  console.log(game.board);
});



