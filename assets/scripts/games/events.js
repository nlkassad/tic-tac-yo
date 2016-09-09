'use strict';

const api = require('./api');
const ui = require('./ui');

const isEmpty = function (element) {
  return $(element).is(':empty');
};

const addHtmlPlayerMarker = function (target) {
  let marker = $(".player-marker").html();
  return $(target).html(marker);
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

const onSelectSquare = function (event) {
  event.preventDefault();
//  let marker = $(".player-marker").html();
//  let isX = marker === "x";
//  let isO = marker === "o";
  let emptySquare = isEmpty(event.target);
  //  let div = event.target.id;
  if (emptySquare === true) {
    addHtmlPlayerMarker(event.target);
    let index = event.target.id;
    let value = $(".player-marker").html();
    let data = {
        "game": {
          "cell": {
            "index": index,
            "value": value
          },
          "over": false
        }
      };
  //  let data = getFormFields(event.target);
    api.selectSquare(data)
      .done(ui.selectSquareSuccess)
      .fail(ui.failure);
  //    variables.playerMarker = "o";
    toggleMarker();

  //    console.log(variables.playerMarker);
//  } else if (isO && emptySquare) {
//    addHtmlPlayerMarker(event.target);
  //    variables.playerMarker = "x";
//    addHtmlPlayerMarker(".player-marker");
  //    console.log(variables.playerMarker);
  } else {
    console.log("Failure");
  }


};

const onSelectNewGame = function (event) {
  event.preventDefault();
//  let data = getFormFields(event.target);
  api.selectNewGame()
    .done(ui.newGameSuccess)
    .fail(ui.failure);
};


const addHandlers = () => {
  $('.grid-item').on('click', onSelectSquare);
  $('#new-game').on('click', onSelectNewGame);
//  $('#sign-up').on('submit', onSignUp);
//  $('#sign-in').on('submit', onSignIn);
//  $('#change-password').on('submit', onChangePassword);
//  $('#get-users').on('submit', onGetUsers);
//  $('#get-user').on('submit', onGetUser);
//  $('#sign-out').on('submit', onSignOut);
};

module.exports = {
  addHandlers,
};
