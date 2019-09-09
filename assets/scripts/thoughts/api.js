
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

const showThought = (formData) => {
  console.log('from api show')
  console.log('data is ', formData)
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

const updateThought = function (id) {
  console.log('from api update')
  return $.ajax({
    url: config.apiUrl + '/thoughts/' + id, // Add id
    method: 'PATCH', // Change to PATCH
    data: '',
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
