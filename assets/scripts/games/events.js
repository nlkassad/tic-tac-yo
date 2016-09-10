'use strict';

const api = require('./api');
const ui = require('./ui');
const app = require('../app');

const isEmpty = function (element) {
  return $(element).is(':empty');
};

const setNavMessage = function(message) {
  $("#top-nav-message").html(message);
};

const addHtmlPlayerMarker = function (target) {
  let marker = $(".player-marker").html();
  return $(target).html(marker);
};



const onSelectSquare = function (event) {
  event.preventDefault();
  let emptySquare = isEmpty(event.target);
  //  let div = event.target.id;
  console.log(app.game.over);
  if ((emptySquare && !app.game.over) === true) {
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

  } else if (app.game.over === true) {
      let data = {
          "game": {
            "cell": {
              "index": [],
              "value": [],
            },
            "over": true
          }
        };
      api.setWinner(data)
        .done(ui.winnerLog);
      setNavMessage("The game's already over, you should start a new one.");
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

const onGetGameData = function () {
  event.preventDefault();
//  let data = getFormFields(event.target);
  api.getGameData()
    .done(ui.getGameDataSuccess)
    .fail(ui.getGameDataFailure);
};


const addHandlers = () => {
  $('.grid-item').on('click', onSelectSquare);
  $('#new-game').on('click', onSelectNewGame);

  $('#get-game-data').on('click', onGetGameData);
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
