'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  console.log('sign up success')
  $('#message')
    .text('Signed up successfully')
    .removeClass()
    .addClass('success')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message')
      .text('')
      .css('background-color', 'white')
      .removeClass('success')
  }, 5000)
}

const signInSuccess = function (data) {
  console.log('sign in success')
  $('#message')
    .text('Signed in successfully')
    .removeClass()
    .addClass('success')
  setTimeout(() => {
    $('#message')
      .text('')
      .css('background-color', 'white')
      .removeClass('success')
  }, 5000)
  store.user = data.user
  $('#hideOnceSignIn').css('display', 'none')
  $('#hide')
    .css('display', 'block')
}

const signOutSuccess = function () {
  console.log('signout success')
  $('#message')
    .text('Signed out successfully')
    .removeClass()
    .addClass('success')
  $('form').trigger('reset')
  store.user = null
  $('#hide').css('display', 'none')
  $('#hideUntilNewGame').css('display', 'none')
  $('#hideOnceSignIn').css('display', 'block')
  $('.box')
    .html('')
    .css('background-color', 'white')
  $('#gameboard-message')
    .html('')
    .css('background-color', 'white')
  setTimeout(() => {
    $('#message')
      .text('')
      .css('background-color', 'white')
      .removeClass('success')
  }, 5000)
}

const signOutFailure = function () {
  console.log('signout fail')
  $('#message')
    .text('Error on sign out')
    .removeClass()
    .addClass('failure')
}

const changePasswordSuccess = function () {
  console.log('pw success')
  $('.hide').css('display', 'block')
  $('#message')
    .text('Changed password successfully')
    .removeClass()
    .addClass('success')
  $('form').trigger('reset')
  $('#hide').css('display', 'block')
  setTimeout(() => {
    $('#message')
      .text('')
      .removeClass('success')
  }, 5000)
}

const onError = function () {
  console.log('something failed')
  $('#message')
    .text('Something went wrong, please try again.')
    .addClass('failure')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message')
      .text('')
      .removeClass('failure')
  }, 4000)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  onError
}
