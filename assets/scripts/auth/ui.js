'use strict';

const app = require('../app');

const signInSuccess = (data) => {
  app.user = data.user;
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
  app.user = null;
  console.log("Password changed success");
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
