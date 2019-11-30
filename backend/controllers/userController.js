const express = require('express');
const router = express.Router()
const User = require('../models/user.js')
const Dog = require('../models/dog.js')
const bcrypt = require('bcryptjs')

// User Registration -
// GET /users/register
// POST /users/register

// User Login
// GET /users/login
// POST /users/login

// User Edit - require Auth This route will allow them to edit their personal information
// GET /users/:id/edit
// PUT /users/:id/

// User Logout
// GET /users/logout

// User Delete - require Auth
// DELETE /users/:id

// Users Show Page: This route shows users dog matches 
//GET /users/:id

module.exports = router