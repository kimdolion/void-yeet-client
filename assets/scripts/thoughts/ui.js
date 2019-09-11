'use strict'

// const store = require('../store')
const showThoughtsTemplate = require('../templates/yeet-listing.handlebars')

const onIndexSuccess = (responseData) => {
  const showThoughtsHtml = showThoughtsTemplate({ thoughts: responseData.thoughts })
  $('.content').html(showThoughtsHtml)
}

const onGetThoughtsSuccess = responseData => {
  if (responseData.thoughts.length >= 0) {
    const lengthYeets = responseData.thoughts.length
    $('#length').text(`${lengthYeets} Thoughts!`)
  }
}

const onShowSuccess = function (responseData) {
  $('#cru-message')
    .text('Showing one yeet')
    .addClass('success')
  $('form').trigger('reset')
  $('#thought-display').html(responseData.thought.words)
  setTimeout(() => {
    $('#cru-message')
      .text('')
      .removeClass('success')
  }, 3500)
}

const onClearThoughts = () => {
  $('.content').empty()
  $('form').trigger('reset')
}

const onUpdateSuccess = () => {
  $('#cru-message')
    .text('Updated a yeet!')
    .addClass('success')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#cru-message')
      .text('')
      .removeClass('success')
  }, 3500)
}

const onCreateSuccess = function (responseData) {
  $('.prepare').removeClass('invisible')
  $('#yeet-display')
    .show()
    .text(responseData.thought.words)
    .addClass('animated')
  $('#create-thought')
    .trigger('reset')
    .hide()
  setTimeout(() => {
    $('.prepare').addClass('invisible')
    $('#yeet-display')
      .hide()
      .text('')
      .removeClass('animated')
    $('#create-thought')
      .show()
  }, 2500)
}

const onError = function () {
  $('#message')
    .text('Something went wrong, please try again.')
    .removeClass()
    .addClass('failure')
  setTimeout(() => {
    $('#message')
      .text('')
      .removeClass('failure')
  }, 3500)
}

const onErrorModal = function () {
  $('#cru-message')
    .text('Something went wrong, please try again.')
    .removeClass()
    .addClass('failure')
  setTimeout(() => {
    $('#cru-message')
      .text('')
      .removeClass('failure')
  }, 3500)
}

module.exports = {
  onIndexSuccess,
  onGetThoughtsSuccess,
  onShowSuccess,
  onClearThoughts,
  onUpdateSuccess,
  onCreateSuccess,
  onError,
  onErrorModal
}
