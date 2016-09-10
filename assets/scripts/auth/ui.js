'use strict';

const app = require('../app');

const clearGrid = function () {
  $(".grid-item").empty();
};

const setNavMessage = function(message) {
  $("#top-nav-message").html(message);
};

const toggleLoggedInOut = function() {
  $(".logged-in").toggleClass("hide show");
  $(".logged-out").toggleClass("show hide");
  $(".game-data").toggleClass("show hide");
  $(".play-control").toggleClass("hide show");
};

const signInSuccess = (data) => {
  app.user = data.user;
//  data.credentials = null;
  console.log(data);
  console.log(app.user);
  document.getElementById("sign-in").reset();
  setNavMessage("Would you like to play a game?");
  toggleLoggedInOut();
//  debugger;
};

const signUpSuccess = (data) => {
  app.user = data.user;
  document.getElementById("sign-up").reset();
  console.log(data);
  console.log(app.user);
  setNavMessage("You have an account! Now you may need to sign in...");
  toggleLoggedInOut();
};

const changePasswordSuccess = () => {
  console.log("Password changed success");
};

const getUsersSuccess = (data) => {
  console.log(data);
};

const getUserSuccess = (data) => {
  console.log(data);
};

const signOutSuccess = () => {
  console.log();
//  document.find(".logged-in").toggle();
//  document.find(".logged-out").toggle();
  clearGrid();
  app.user = null;
  setNavMessage("Fine, leave me, whatever...");
  toggleLoggedInOut();

//  console.log("Password changed success");
};





const failure = (error) => {
  console.error(error);
};

const signOutFailure = () => {
  console.log();
//  document.find(".logged-in").toggle();
//  document.find(".logged-out").toggle();
//  app.user = null;
  toggleLoggedInOut();

//  console.log("Password changed success");
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
