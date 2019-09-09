
'use strict'

const config = require('../config')
const store = require('../store')

const createThought = function (data) {
  console.log('data: ', data)
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

const showThought = function (thought) {
  return $.ajax({
    url: config.apiUrl + '/thoughts/' + thought.id,
    method: 'GET',
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

const updateThought = function (data) {
  return $.ajax({
    url: config.apiUrl + '/thoughts/' + data.thought.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createThought,
  destroyThought,
  indexThoughts,
  showThought,
  updateThought
}
