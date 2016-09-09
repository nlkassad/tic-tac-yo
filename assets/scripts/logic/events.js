'use strict';

// const api = require('./api');
// const ui = require('./ui');
// const variables = require('./variables');



const isEmpty = function (element) {
  return $(element).is(':empty');
};

const addHtmlPlayerMarker = function (target) {
  let marker = $(".player-marker").html();
  return $(target).html(marker);
};

const onSelectStart = function (event) {
  event.preventDefault();
//  let marker = "x";
//  console.log(marker);
  $(".player-marker").html("x");
//  if () {
//    variables.playerMarker = "X";
//    $(".player-marker").html("x");
//    console.log(".player-marker");
//  } else {
//    console.log("Failure");
//  }

//  let player = "Player: X";
//  $('.player').html(player);
//  return player;
};

const onSelectSquare = function (event) {
  event.preventDefault();
//  let text = event.target.html;
  console.log(event.target.html);
  let marker = $(".player-marker").html();
  console.log(marker);
  let isX = marker === "x";
  let isO = marker === "o";
  let emptySquare = isEmpty(event.target);
//  let div = event.target.id;
  if (isX && emptySquare) {
    addHtmlPlayerMarker(event.target);
//    variables.playerMarker = "o";
    addHtmlPlayerMarker(".player-marker");

//    console.log(variables.playerMarker);
  } else if (isO && emptySquare) {
    addHtmlPlayerMarker(event.target);
//    variables.playerMarker = "x";
    addHtmlPlayerMarker(".player-marker");
//    console.log(variables.playerMarker);
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
