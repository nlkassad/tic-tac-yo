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



const selectSquareSuccess = (data) => {
  app.game = data.game;
  win.indexCells(app.game);


  //
  // function logArrayElements(element, index) {
  // console.log('a[' + index + '] = ' + element);
  // }
  // let elementsArray = app.game.cells.forEach(logArrayElements);
  //   let squares = jQuery.grep( [ "x", "o", "x" ], function( marker ) {
  //   return marker !== "x";
  // });
  // console.log(elementsArray);
  // console.log(squares);
  // console.log(app.game.cells);
  // grep success need to see if I can return index numbers
  // let markers = app.game.cells.filter(function( cells ) {
  // return cells !== "x";
  // });
  // console.log(markers);

//  let markersArray[i] = jQuery.each().inArray( "x", app.game.cells);
//  console.log(markersArray);
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

// jquery grep reference: used in selectSquareSuccess
// http://api.jquery.com/jquery.grep/
// jquery filter reference: not used
// http://api.jquery.com/filter/
// jquety in array reference: not used
// https://api.jquery.com/jQuery.inArray/
// jquery map reference:
// http://api.jquery.com/jquery.map/
