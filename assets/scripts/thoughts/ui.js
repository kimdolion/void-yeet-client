'use strict'

const store = require('../store')
const showThoughtsTemplate = require('../templates/yeet-listing.handlebars')

const onIndexSuccess = (responseData) => {
  const showThoughtsHtml = showThoughtsTemplate({ thoughts: responseData.thoughts })
  $('.content').html(showThoughtsHtml)
}

const onGetThoughtsSuccess = responseData => {
  if (responseData.thoughts.length > 0) {
    const lengthYeets = responseData.thoughts.length
    $('#yeets-length')
      .text(`You've Yeeted ${lengthYeets} Thoughts!`)
    setTimeout(() => {
      $('#yeets-length')
        .text('')
    }, 5000)
  }
}

const onShowSuccess = function (responseData) {
  const gameHTML = (`
    <h4>ID: ${responseData.thought.id}</h4>
  `)
  $('#game-display').html(gameHTML)
  $('form').trigger('reset')
}

const onUpdateSuccess = function (responseData) {
  store.thought = responseData.thought
}

const onCreateSuccess = function (responseData) {
  $('#hideUntilNewGame')
    .css('display', 'block')
  $('.box')
    .css('background-color', 'white')
    .text('')
  $('#gameboard-message')
    .css('background-color', 'white')
    .text('')
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
  }, 4000)
}

module.exports = {
  onIndexSuccess,
  onGetThoughtsSuccess,
  onShowSuccess,
  onUpdateSuccess,
  onCreateSuccess,
  onError
}
