'use strict';

const api = require('./api');
const ui = require('./ui');
const app = require('../app');

const isEmpty = function (element) {
  return $(element).is(':empty');
};

const setNavMessage = function(message) {
  $('[data-id="top-nav-message"]').html(message);
};

const addHtmlPlayerMarker = function (target) {
  let marker = $(".player-marker").html();
  return $(target).html(marker);
};

const onSelectSquare = function (event) {
  event.preventDefault();
  let emptySquare = isEmpty(event.target);
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
    api.selectSquare(data)
      .done(ui.selectSquareSuccess)
      .fail(ui.selectSquareFailure);
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
  api.selectNewGame()
    .done(ui.newGameSuccess)
    .fail(ui.newGameFailure);
};

const onGetGameData = function () {
  event.preventDefault();
  api.getGameData()
    .done(ui.getGameDataSuccess)
    .fail(ui.getGameDataFailure);
};

const addHandlers = () => {
  $('.grid-item').on('click', onSelectSquare);
  $('#new-game').on('click', onSelectNewGame);
  $('#get-game-data').on('click', onGetGameData);
};

module.exports = {
  addHandlers,
};
