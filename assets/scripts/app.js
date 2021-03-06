'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')
const thoughtEvents = require('./thoughts/events.js')
$(() => {
  authEvents.addHandlers()
  thoughtEvents.addHandlers()
})
