const express = require('express')
const router = express.Router()
const superagent = require('superagent')
const Buffer = require('buffer/').Buffer
const Dog = require('../models/dog.js')
const User = require('../models/user.js')
// User Looking to Rehome their dog Routes - This route will show a form of dog criteria for the user to fill out in order to create a profile for their dog to be inserted into the rehoming section
// GET /dogs/new
// POST /dogs

// This route will allow Users to see their dogs’ profile page
// GET /dogs/:id

// This route will allow Users to edit their dogs’ profile page -- require auth’d user to be that dogs owner
// GET /dogs/:id/edit
// PUT /dogs/:id

// Shelter Dogs Index
// GET /dogs/shelter

// Shelter Dog Show Page
// GET /dogs/shelter/:id

// Home to Rehome Dogs Index
// GET /dogs/rehome

// Home to Rehome Dog Show Page
// GET /dogs/rehome/:id

module.exports = router