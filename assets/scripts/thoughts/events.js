'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGetThoughts = event => {
  event.preventDefault()
  api.indexThoughts()
    .then(ui.onIndexSuccess)
    .catch(ui.onError)
}

const onShowThought = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.showThought(formData)
    .then(ui.onShowSuccess)
    .catch(ui.onError)
}

const onClearThoughts = event => {
  event.preventDefault()
  ui.onClearThoughts()
}

const onUpdateThought = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  const formData = getFormFields(event.target)
  api.updateThought(formData, id)
    .then(function () {
      onGetThoughts(event)
    })
    .catch(ui.onError)
}

const onDeleteThought = event => {
  const id = $(event.target).data('id')
  api.destroyThought(id)
    // .then(onGetBooks(event)) this is bad. don't do this. it will run immediately, it will refresh the page before we actually delete the book.
    .then(function () {
      onGetThoughts(event)
    })
    .catch(ui.onError)
}

const onCreateThought = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createThought(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onError)
}

const addHandlers = () => {
  $('#index-thoughts').on('submit', onGetThoughts)
  $('#show-thought').on('submit', onShowThought)
  $('#clearThoughtsButton').on('click', onClearThoughts)
  $('#create-thought').on('submit', onCreateThought)
  $('.content').on('submit', '#update-thought', onUpdateThought)
  $('.content').on('click', '.delete-button', onDeleteThought)
  // $('#thoughts-collection').on('click', onGetThoughtsLength)
}

module.exports = {
  addHandlers
}
