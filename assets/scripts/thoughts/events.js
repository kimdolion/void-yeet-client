'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGetThoughts = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.indexThoughts(data.thought)
    .then(ui.onIndexSuccess)
    .catch(ui.onError)
}

// const onGetThoughtsLength = function () {
//   const data = getFormFields(event.target)
//   api.indexThoughts(data.thought)
//     .then(ui.onGetThoughtsSuccess)
//     .catch(ui.onError)
// }

const onShowThought = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showGame(data.thought.id)
    .then(ui.onShowSuccess)
    .catch(ui.onError)
}

const onUpdateThought = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateGame(data.thought.id)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError)
}

const onDeleteThought = (event) => {
  const id = $(event.target).data('id')
  api.deleteThought(id)
    // .then(onGetBooks(event)) this is bad. don't do this. it will run immediately, it will refresh the page before we actually delete the book.
    // the annonymous function isn't actually being invoked. by passing the reference
    .then(function () {
      onGetThoughts(event)
    })
    .catch(ui.failure)
}

const onCreateThought = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createThought(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onError)
}

const addHandlers = () => {
  $('#index-thoughts').on('submit', onGetThoughts)
  $('#show-thought').on('submit', onShowThought)
  $('#update-thought').on('submit', onUpdateThought)
  $('#create-thought').on('submit', onCreateThought)
  $('.content').on('click', '.delete-button', onDeleteThought)
  // $('#thoughts-collection').on('click', onGetThoughtsLength)
}

module.exports = {
  addHandlers
}
