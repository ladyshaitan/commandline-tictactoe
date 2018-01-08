var Game = function(player1, player2) {

	this.player1 = player1;
	this.player2 = player2;

	this.isGameActive = true;
	this.playerPlaying = this.player1;

	this.game =
	[[null, null, null], 
	[null, null, null], 
	[null, null, null]];

	this.board = 
	this.game[0].join(' | ') + '\n' +
	this.game[1].join(' | ') + '\n' +
	this.game[2].join(' | ');
	
}

Game.prototype = {
	move: (player, space) => {
		this.player1 === player ? 
		this.game[space] = 'X' :
		this.game[space] = 'O';

		this.playerPlaying = this.player1;
		this.playerPlaying === this.player1 ?
		this.player2 : this.player1;
	},

	clearGame: () => {
		this.game.forEach((arr) => arr.forEach(space => space = null));
	},

	endGame: () => {
		this.isGameActive = false;
	}
}

module.exports.Game = Game;