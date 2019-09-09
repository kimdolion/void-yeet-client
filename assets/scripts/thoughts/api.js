
'use strict'

const config = require('../config')
const store = require('../store')

const createThought = function (data) {
  return $.ajax({
    url: config.apiUrl + '/thoughts',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const indexThoughts = function () {
  return $.ajax({
    url: config.apiUrl + '/thoughts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showThought = (formData) => {
  const id = formData.thought.id

  return $.ajax({
    url: config.apiUrl + '/thoughts/' + id,
    method: 'GET', // A little redundant, it would be implied
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const destroyThought = function (id) {
  return $.ajax({
    url: config.apiUrl + '/thoughts/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateThought = function (formData, id) {
  return $.ajax({
    url: config.apiUrl + '/thoughts/' + id,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createThought,
  destroyThought,
  indexThoughts,
  showThought,
  updateThought
}
