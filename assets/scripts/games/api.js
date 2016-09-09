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

const selectNewGame = (data) => {
  console.log();
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
};
