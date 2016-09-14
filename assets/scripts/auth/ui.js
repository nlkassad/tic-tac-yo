'use strict';

const app = require('../app');

const clearGrid = function () {
  $(".grid-item").empty();
};

const setNavMessage = function(message) {
  $('[data-id="top-nav-message"]').html(message);
};

const toggleLoggedInOut = function() {
  $(".logged-in").toggleClass("hide show");
  $(".logged-out").toggleClass("show hide");
  $(".game-data").toggleClass("show hide");
  $(".play-control").toggleClass("hide show");
};

const signInSuccess = (data) => {
  app.user = data.user;
  document.getElementById("sign-in").reset();
  setNavMessage("Would you like to play a game?");
  toggleLoggedInOut();
};

const signUpSuccess = () => {
//  app.user = data.user;
  document.getElementById("sign-up").reset();
  setNavMessage("Cool yo, now sign in...");
//  $('[data-id="games-played"]').empty();
  // removed authentication ui toggle
};

const changePasswordSuccess = () => {
  setNavMessage("You just gone dun changed your password!");
  document.getElementById("change-password").reset();
};

const changePasswordFailure = () => {
  setNavMessage("Something went wrong...");
  document.getElementById("change-password").reset();
};

const getUsersSuccess = (data) => {
  setNavMessage(data);
};

const getUserSuccess = (data) => {
  setNavMessage(data);
};

const signOutSuccess = () => {
  clearGrid();
  app.user = null;
  setNavMessage("Fine, leave me, whatever...");
  toggleLoggedInOut();
};

const failure = () => {
  setNavMessage("Something went wrong...");
  this.reset();
};

const signOutFailure = () => {
  setNavMessage("Something went wrong...");
  toggleLoggedInOut();
};

module.exports = {
  signInSuccess,
  getUsersSuccess,
  getUserSuccess,
  failure,
  signUpSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
};
