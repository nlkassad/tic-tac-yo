'use strict';

const app = require('../app');

const signUp = (data) => {
  return $.ajax({
    url: app.host + "/sign-up",
    method: "POST",
    data: data,
  });
};

const signIn = (data) => {
  return $.ajax({
    url: app.host + "/sign-in",
    method: "POST",
    data: data,
  });
};

const changePassword = (data) => {
  return $.ajax({
    url: app.host + "/change-password/" + app.user.id,
    method: "PATCH",
    headers: {
      Authorization: "Token token=" + app.user.token,
    },
    data: data,
  });
};

const getUsers = (data) => {
  return $.ajax({
    url: app.host + "/users",
    method: "GET",
    headers: {
      Authorization: "Token token=" + app.user.token,
    },
    data: data,
  });
};

const getUser = (data) => {
  let token = app.user.token;
  let getId = data.getUser.id;
  return $.ajax({
    url: app.host + "/users/" + getId,
    method: "GET",
    headers: {
      Authorization: "Token token=" + token,
    },
  });
};

const signOut = () => {
  return $.ajax({
    url: app.host + "/sign-out/" + app.user.id,
    method: "DELETE",
    headers: {
      Authorization: "Token token=" + app.user.token,
    },
  });
};

module.exports = {
  signUp,
  signIn,
  getUsers,
  getUser,
  changePassword,
  signOut,
};
