'use strict';

const app = require('../app');

const selectSquare = (data) => {
  console.log(data);
  return $.ajax({
    url: app.host + "/games/" + app.game.id,
    method: "PATCH",
    headers: {
      Authorization: "Token token=" + app.user.token,
    },
    data: data,
  });
};

const getGameData = (data) => {
  return $.ajax({
    url: app.host + "/games",
    method: "GET",
    headers: {
      Authorization: "Token token=" + app.user.token,
    },
    data: data,
  });
};

const setWinner = (data) => {
  return $.ajax({
    url: app.host + "/games/" + app.game.id,
    method: "PATCH",
    headers: {
      Authorization: "Token token=" + app.user.token,
    },
    data: data,
  });
};

const selectNewGame = (data) => {
  return $.ajax({
    url: app.host + "/games",
    method: "POST",
    headers: {
      Authorization: "Token token=" + app.user.token,
    },
    data: data,
  });
};



module.exports = {
  selectSquare,
  selectNewGame,
  setWinner,
  getGameData,
};
