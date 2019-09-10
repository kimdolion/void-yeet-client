'use strict'

// const store = require('../store')
const showThoughtsTemplate = require('../templates/yeet-listing.handlebars')

const onIndexSuccess = (responseData) => {
  const showThoughtsHtml = showThoughtsTemplate({ thoughts: responseData.thoughts })
  $('.content').html(showThoughtsHtml)
}

// const onGetThoughtsSuccess = responseData => {
//   if (responseData.thoughts.length > 0) {
//     const lengthYeets = responseData.thoughts.length
//     $('#yeets-length')
//       .text(`You've Yeeted ${lengthYeets} Thoughts!`)
//     setTimeout(() => {
//       $('#yeets-length')
//         .text('')
//     }, 5000)
//   }
// }

const onShowSuccess = function (responseData) {
  $('#thought-display').text('Showing past yeet: ' + responseData.thought.words)
}

const onClearThoughts = () => {
  $('.content').empty()
}

const onUpdateSuccess = () => {
  $('form').trigger('reset')
  // const text = responseData.thought.words
  // $('#message').append('Updating thought: ' + text)
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
  }, 5000)
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
  // onGetThoughtsSuccess,
  onShowSuccess,
  onClearThoughts,
  onUpdateSuccess,
  onCreateSuccess,
  onError
}
