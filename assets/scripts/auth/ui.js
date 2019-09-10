'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message')
    .text('Signed up successfully')
    .removeClass()
    .addClass('success')
  $('form').trigger('reset')
  $('.show').removeClass('show')
  setTimeout(() => {
    $('#message')
      .text('')
      .removeClass('success')
  }, 4000)
}

const signInSuccess = function (data) {
  console.log('sign in success')
  $('#message')
    .text('Signed in successfully')
    .removeClass()
    .addClass('success')
  $('form').trigger('reset')
  $('.show').removeClass('show')
  setTimeout(() => {
    $('#message')
      .text('')
      .removeClass('success')
  }, 4000)
  store.user = data.user
  $('.login').css('display', 'none')
  $('.logout')
    .css('display', 'block')
}

const signOutSuccess = function () {
  $('#message')
    .text('Signed out successfully')
    .removeClass()
    .addClass('success')
  $('form').trigger('reset')
  store.user = null
  $('.logout').css('display', 'none')
  $('.login').css('display', 'block')
  setTimeout(() => {
    $('#message')
      .text('')
      .removeClass('success')
  }, 4000)
}

const changePasswordSuccess = function () {
  $('.hide').css('display', 'block')
  $('#message')
    .text('Changed password successfully')
    .removeClass()
    .addClass('success')
  $('form').trigger('reset')
  $('.show').removeClass('show')
  setTimeout(() => {
    $('#message')
      .text('')
      .removeClass('success')
  }, 4000)
}

const onError = function () {
  console.log('something failed')
  $('#message')
    .text('Something went wrong, please try again.')
    .addClass('failure')
  $('form').trigger('reset')
  $('.show').removeClass('show')
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
  changePasswordSuccess,
  onError
}
