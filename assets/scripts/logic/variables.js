'use strict';

// Required variables
// player - this is the current player who's turn it is
// player marker - this is what they're using to indicate control of squares
// game state - phaze of game play
// win state - if a game can or has been won
const x = "X";
const o = "O";
const startingPlayer = "Player: X";

let playerMarker = null;
let player = ("Player: " + playerMarker);


module.exports = {
  player,
  playerMarker,
  x,
  o,
  startingPlayer,
};
