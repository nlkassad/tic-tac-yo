'use strict';

const app = require('../app');


const signInSuccess = (data) => {
  app.user = data.user;
//  data.credentials = null;
  $(".logged-in").toggleClass("hide, show");
  $(".logged-out").toggleClass("show, hide");
  console.log(data);
  document.getElementById("sign-in").reset();
//  debugger;
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
  $(".logged-in").toggleClass("hide, show");
  $(".logged-out").toggleClass("show, hide");
//  document.find(".logged-in").toggle();
//  document.find(".logged-out").toggle();
  app.user = null;

//  console.log("Password changed success");
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};



module.exports = {
  signInSuccess,
  getUsersSuccess,
  getUserSuccess,
  failure,
  success,
  changePasswordSuccess,
  signOutSuccess,
};
