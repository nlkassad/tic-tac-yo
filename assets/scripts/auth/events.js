'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.failure);
};

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
    .done(ui.signUpSuccess)
    .fail(ui.failure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.changePasswordFailure);
};

const onGetUsers = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.getUsers(data)
    .done(ui.getUsersSuccess)
    .fail(ui.failure);
};

const onGetUser = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.getUser(data)
    .done(ui.getUserSuccess)
    .fail(ui.failure);
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.signOutFailure);
};



const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#get-users').on('submit', onGetUsers);
  $('#get-user').on('submit', onGetUser);
  $('#sign-out').on('submit', onSignOut);
};

module.exports = {
  addHandlers,
};
