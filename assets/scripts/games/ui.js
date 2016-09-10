'use strict';

const app = require('../app');
const win = require('./win');

// const ui = require('./ui');

// const addHtmlPlayerMarker = function (target, data) {
// //  let marker = $(".player-marker").html();
//   return $(target).html(data.);
// };
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
    console.log("fail boat");
  }
};

const selectSquareSuccess = (data) => {
  app.game = data.game;
  let marker = $(".player-marker").html();
  console.log(marker);
  let indices = win.indexCells(app.game, marker);
  console.log(indices);
  let winState = win.checkForWin(indices);

//  data.credentials = null;
  console.log(data);
  console.log(app.game);
  console.log(winState);
  toggleMarker();

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

// jquery grep reference: used in selectSquareSuccess
// http://api.jquery.com/jquery.grep/
// jquery filter reference: not used
// http://api.jquery.com/filter/
// jquety in array reference: not used
// https://api.jquery.com/jQuery.inArray/
// jquery map reference:
// http://api.jquery.com/jquery.map/
