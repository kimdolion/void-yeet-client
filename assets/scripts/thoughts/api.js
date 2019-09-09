
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

const showThought = function (data) {
  const id = data.thought.id
  return $.ajax({
    url: config.apiUrl + '/thoughts/' + id,
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
  console.log('from api update')
  console.log('store is', store)
  const id = data.thoughts.id

  return $.ajax({
    url: config.apiUrl + '/thoughts/' + id, // Add id
    method: 'PATCH', // Change to PATCH
    data: data,
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
