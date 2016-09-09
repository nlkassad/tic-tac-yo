'use strict';

const app = require('../app');
const app = require('../win');

// const ui = require('./ui');

// const addHtmlPlayerMarker = function (target, data) {
// //  let marker = $(".player-marker").html();
//   return $(target).html(data.);
// };
const clearGrid = function () {
  $(".grid-item").empty();
};

const selectSquareSuccess = (data) => {
  app.game = data.game;
//  let value = $(".player-marker").html();

//  data.credentials = null;
  console.log(data);
  console.log(app.game);
//  console.log(app.game.Array[9])
//  debugger;
};

const newGameSuccess = (data) => {
  app.game = data.game;
  $(".player-marker").html("x");
//  data.credentials = null;
//  console.log(data);
  console.log(app.game);
  clearGrid();
//  document.getElementById("sign-in").reset();
//  toggleLoggedInOut();
//  debugger;
};

module.exports = {
  newGameSuccess,
  selectSquareSuccess,
};
