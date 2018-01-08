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

rl.question(`Hello, ${game.player1}!  What's the first name of player 2?`, (answer) => {
  game.player2 = answer;

  console.log(game);
})

rl.on('line', (input) => {


});



