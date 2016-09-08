'use strict';

const api = require('./api');
const ui = require('./ui');
const variables = require('./variables');



const onSelectStart = function (event) {
  event.preventDefault();
  if (variables.playerMarker === null) {
    variables.playerMarker = "X";
    $(".player").html(variables.startingPlayer);
    console.log(variables.startingPlayer);
  } else {
    console.log("Failure");
  }

//  let player = "Player: X";
//  $('.player').html(player);
//  return player;
};

const onSelectSquare = function (event) {
  event.preventDefault();
//  let text = event.target.html;
  console.log(event.target.html);
  let isX = variables.playerMarker === "X";
  let isO = variables.playerMarker === "O";
  let emptySquare = $(event.target).is(':empty');

//  let div = event.target.id;
  if (isX && emptySquare) {
    $(event.target).html(variables.playerMarker);
    variables.playerMarker = "O";
    $(".player").html(variables.playerMarker);
    console.log(variables.playerMarker);
  } else if (isO && emptySquare) {
    $(event.target).html(variables.playerMarker);
    variables.playerMarker = "X";
    $(".player").html(variables.playerMarker);
    console.log(variables.playerMarker);
  } else {
    console.log("Failure");
  }

  // let div = event.target.id;
  // let marker = "x";
  // let player = $(".player").;
  // console.log("you clicked " + div);
  // $(event.target).html(marker);
  // $(".player").toggleClass("player-x player-o");
  // console.log(player);
  //
  //  api.getUser(data)
  //    .done(ui.getUserSuccess)
  //    .fail(ui.failure);
};

const addHandlers = () => {
  $('.grid-item').on('click', onSelectSquare);
  $('#start').on('click', onSelectStart);
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
