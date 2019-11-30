const express = require('express');
const router = express.Router()
const User = require('../models/user.js')
const Dog = require('../models/dog.js')
const bcrypt = require('bcryptjs')

module.exports = router