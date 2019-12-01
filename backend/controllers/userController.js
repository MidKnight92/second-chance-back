// NEED TO REQUIRE AUTH AFTER TESTING ROUTES
const express = require('express');
const router = express.Router()
const User = require('../models/user.js')
const Dog = require('../models/dog.js')
const bcrypt = require('bcryptjs')

router.get('/', (req, res) => {
    res.send('Hitting user Controller')
})
//@route GET /users/register
//@description User Registration -
router.get('/register', (req, res) => {
	let messageToShow = ''
	if (req.session.message) {
		messageToShow = req.session.message
		req.session.message = ''
	} 
	res.json({message: messageToShow})
})

//@route POST /users/register
router.post('/register', async (req, res, next) => {
	const username = req.body.username
	try {
		const user = await User.findOne({
			username: username
		})
		if (user !== null) {
			req.session.message = 'Username is taken.'
			res.redirect('/users/register')
		} else {
			const password = req.body.password
			const hashedPassword = bcrypt.hashSync(password,
				bcrypt.genSaltSync(10)
				)
			const createdUser = await User.create({
				username: username,
				password: hashedPassword,
				email: req.body.email,
				zip_code: req.body.zip_code,
				adopting: req.body.adopting
			})
			req.session.loggedIn = true
			req.session.userId = createdUser._id
			req.session.username = createdUser.username
			// res.redirect('/')
			res.json(createdUser)
		}
	}
	catch (err) {
		res.status(400).json('Error' + err)
		next(err)
	}
})

//@route GET /users/login
//@description User Login
router.get('/login', (req, res) => {
	let messageToShow = ''
	if (req.session.message){
		messageToShow = req.session.message
		req.session.message = ''
	}
	res.json({message: messageToShow})
})

//@route POST /users/login
router.post('/login', async (req, res, next) => {
    try {
        const foundUsers = await User.find({
            username: req.body.username
        })
        if (foundUsers.length === 0) {
            req.session.message = 'invalid username or password'
            res.redirect('/users/login')
        } else {
            const password = req.body.password
            if (bcrypt.compareSync(password, foundUsers[0].password)) {
                req.session.loggedIn = true
                req.session.userId = foundUsers[0]._id
                req.session.username = foundUsers[0].username
                res.redirect('/register')
            } else {
                req.session.message = 'Invalid username or password'
                // res.redirect('/users/login')
                res.json('User is logging in')
            }
        }
    } catch (err) {
    	res.status(400).json('Error' + err)
        next(err)
    }
})

//@route GET /users/:id/edit
//@description User Edit - require Auth This route will allow them to edit their personal information
router.get('/:id/edit', async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id);
			res.json({user: user})
	}
	catch (err) {
		res.status(400).json('Error' + err)		
		next(err)
	}
})

//@route PUT /users/:id/
router.put('/:id', async (req, res, next) => {
	try {
		const user = await User.findOneAndUpdate(req.params.id, req.body, (err, updatedMoedl) => {
			res.json('User has been updated:', )
			// res.redirect('/:id')
		})
	}
	catch (err) {
		res.status(400).json('Error' + err)		
		next(err)
	}
})

//@route GET /users/logout
//@description User Logout
router.get('/logout', async (req, res, next) => {
	try {
		await req.session.destroy()
		res.json('Session over')
		// res.redirect('/')
	}
	catch (err) {
		res.status(400).json('Error' + err)
		next(err)
	}
})

//@route DELETE /users/:id
//@description User Delete - require Auth
router.delete('/:id', async (req, res, next) => {
	try {
		const findUser = await User.deleteOne({_id: req.params.id})
		await Dog.deleteMany({user: req.params.id})
		res.json('User Deleted')
		// res.redirect('/')
	}
	catch (err) {
		res.status(400).json('Error' + err)		
		next(err)
	}
})

//@route GET /users/:id
//@description Users Show Page: This route shows users dog matches require Auth
router.get('/:id', async (req, res, next) => {
	try {
		const dogs = await Dog.find({user: req.session.userId});
		res.json({
			dogs: dogs,
			userId: req.session.userId
		});
	}
	catch (err) {
		res.status(400).json('Error' + err)
		next(err)
	}
})

module.exports = router