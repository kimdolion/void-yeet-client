'use strict'

// const store = require('../store')
const showThoughtsTemplate = require('../templates/yeet-listing.handlebars')

const onIndexSuccess = (responseData) => {
  const showThoughtsHtml = showThoughtsTemplate({ thoughts: responseData.thoughts })
  $('.content').html(showThoughtsHtml)
}

const onGetThoughtsSuccess = responseData => {
  if (responseData.thoughts.length > 0) {
    const lengthYeets = responseData.thoughts.length
    $('#length')
      .text(`You've Yeeted ${lengthYeets} Thoughts!`)
    setTimeout(() => {
      $('#length')
        .text('')
    }, 4000)
  }
}

const onShowSuccess = function (responseData) {
  $('form').trigger('reset')
  $('#thought-display').text('Showing past yeet: ' + responseData.thought.words)
}

const onClearThoughts = () => {
  $('.content').empty()
  $('form').trigger('reset')
}

const onUpdateSuccess = () => {
  $('form').trigger('reset')
}

const onCreateSuccess = function (responseData) {
  $('#yeet-display')
    .html(responseData.thought.words)
    .addClass('animated')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#yeet-display')
      .text('')
      .removeClass('animated')
  }, 4000)
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
  onClearThoughts,
  onUpdateSuccess,
  onCreateSuccess,
  onError
}
