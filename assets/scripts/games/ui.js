'use strict';

const app = require('../app');
const win = require('./win');

const setNavMessage = function(message) {
  $('[data-id="top-nav-message"]').html(message);
};

const clearGrid = function () {
  $(".grid-item").empty();
};

const toggleMarker = function () {
  let marker = $(".player-marker").html();
  if (marker === "x") {
    return $(".player-marker").html("o");
  } else if (marker === "o") {
    return $(".player-marker").html("x");
  } else {
  }
};

const selectSquareSuccess = (data) => {
  app.game = data.game;
  let marker = $(".player-marker").html();
  let indices = win.indexCells(app.game, marker);
  let winState = win.checkForWin(indices);
  if (winState === true) {
    setNavMessage("Damn Player " + marker + " you got crazy tic tac skillz!");
    app.game.over = true;
    return app.game.over;
    // trigger submit game log event
  } else {
    toggleMarker();
  }
};

const winnerLog = (data) => {
  app.game = data.game;
};

const getGameDataSuccess = (data) => {
  app.games = data.games;
  let numberOfGames = app.games.length;
  $('[data-id="games-played"]').html("Looks like you've played " + numberOfGames + " games");
};

const getGameDataFailure = (data) => {
  app.game = data.game;
  setNavMessage("Boo, no data for you.");
};

const newGameSuccess = (data) => {
  app.game = data.game;
  $(".player-marker").html("x");
  setNavMessage("Here we go! Look at the player indicator for your turn.");
  clearGrid();
};

const newGameFailure = () => {
  setNavMessage("Something went wrong, horribly wrong");
};

const selectSquareFailure = () => {
  setNavMessage("Nah, don't think that's a move");
};

module.exports = {
  newGameSuccess,
  selectSquareSuccess,
  newGameFailure,
  selectSquareFailure,
  winnerLog,
  getGameDataSuccess,
  getGameDataFailure,
};

// jquery grep reference: used in selectSquareSuccess
// http://api.jquery.com/jquery.grep/
// jquery filter reference: not used
// http://api.jquery.com/filter/
// jquety in array reference: not used
// https://api.jquery.com/jQuery.inArray/
// jquery map reference:
// http://api.jquery.com/jquery.map/
