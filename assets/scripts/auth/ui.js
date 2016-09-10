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

const signUpSuccess = (data) => {
  app.user = data.user;
  document.getElementById("sign-up").reset();
  setNavMessage("You have an account! Now you may need to sign in...");
  $('[data-id="games-played"]').empty();
  toggleLoggedInOut();
};

const changePasswordSuccess = () => {
  setNavMessage("You just gone dun changed your password!");
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
  signOutSuccess,
  signOutFailure,
};
