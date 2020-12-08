"use strict";

// Import the DataFire library.
let datafire = require('datafire');

// Create a new Action.
let github = require('@datafire/github').actions;
module.exports = new datafire.Action({
  description: "Greets the user.",
  inputs: [{
    title: "name",
    type: "string",
    maxLength: 100,
    default: "world"
  }],
  handler: async (input, context) => {
    let gists = await github.gists.get({}, context);
    return gists;
  },
});
