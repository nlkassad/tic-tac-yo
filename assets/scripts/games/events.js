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



const onSelectSquare = function (event) {
  event.preventDefault();
  let emptySquare = isEmpty(event.target);
  //  let div = event.target.id;
  if ((emptySquare) === true) {
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
      .fail(ui.selectSquareFailure);
  //    variables.playerMarker = "o";

  } else {
    ui.selectSquareFailure();
  }


};

const onSelectNewGame = function (event) {
  event.preventDefault();
//  let data = getFormFields(event.target);
  api.selectNewGame()
    .done(ui.newGameSuccess)
    .fail(ui.newGameFailure);
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
