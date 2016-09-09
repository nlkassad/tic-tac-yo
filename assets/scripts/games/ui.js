'use strict';

const app = require('../app');
// const win = require('../win');

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
  let squares = jQuery.grep( [ "x", "o", "x" ], function( marker ) {
  return marker !== "x";
  });
  console.log(squares);
  console.log(app.game.cells);
  // grep success need to see if I can return index numbers
  let markers = jQuery.grep( app.game.cells, function( marker ) {
  return marker !== "x";
  });
  console.log(markers);
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
