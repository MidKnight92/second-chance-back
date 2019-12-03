const express = require('express');
const router = express.Router()
const User = require('../models/user.js')
const Dog = require('../models/dog.js')
const bcrypt = require('bcryptjs')

//ROUTE GET TOKEN for the current_user
// fetch("https://api.petfinder.com/v2/oauth2/token", {
//   body: "grant_type=client_credentials&client_id=BOdMR5MM6RvzADgJLhqD5059rJdbQtVfoi5aQP6k8byGhcBNzC&client_secret=XsTu5afAhyqzyEnNYtt9xSrif3Uy7DcgrpEl5Z9u",
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded"
//   },
//   method: "POST"
// })

// this request gives me back a token so I can update the user token.


//@route GET /users/
//@description test route
router.get('/', (req, res) => {
    res.json('Hitting User Controller')
})

//@route GET /users/register
//@description User Registration 
//@access public
router.get('/register', (req, res) => {
	let messageToShow = ''
	if (req.session.message) {
		messageToShow = req.session.message
		req.session.message = ''
	} 
	res.json({message: messageToShow})
})

//@route POST /users/register
//@access public
router.post('/register', async (req, res, next) => {
	const username = req.body.username
	try {
		const user = await User.findOne({
			username: username
		})
		if (user !== null) {
			req.session.message = 'Username is taken.'
			res.json('Username is taken')
			// res.redirect('/users/register')
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
//@access public
router.get('/login', (req, res) => {
	let messageToShow = ''
	if (req.session.message){
		messageToShow = req.session.message
		req.session.message = ''
	}
	res.json({message: messageToShow})
})

//@route POST /users/login
//@access public
router.post('/login', async (req, res, next) => {
    try {
    	console.log(req.body);
        const foundUsers = await User.find({
            username: req.body.username
        })
        if (foundUsers.length === 0) {
            req.session.message = 'invalid username or password'
            res.json('Invalid username or password')
            // res.redirect('/users/login')
        } else {
            const password = req.body.password
            console.log('This is the password', password);
            if (bcrypt.compareSync(password, foundUsers[0].password)) {
                req.session.loggedIn = true
                req.session.userId = foundUsers[0]._id
                req.session.username = foundUsers[0].username
                req.session.message = 'Success'
            	console.log('This is req.session:', req.session, '\nThis is req.body:', req.body);
                // res.redirect('/register')
                res.json(foundUsers[0])
            } else {
                req.session.message = 'Invalid username or password'
                // res.redirect('/users/login')
                res.json('Invalid username or password')
            }
        }
    } catch (err) {
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

// Middleware
const requireAuth = (req, res, next) => {
	if (!req.session.loggedIn) {
		req.session.message = 'You must be logged in to do that'
		res.json(req.session)
	} else {
		next()
	}
}

// All routes below will now requireAuth
router.use(requireAuth)

//@route PUT /users/:id/
//@access restricted
router.put('/:id', async (req, res, next) => {
	try {
		const user = await User.findOneAndUpdate(req.params.id, req.body, (err, updatedMoedl) => {
			res.json('User has been updated')
			// res.redirect('/:id')
		})
	}
	catch (err) {
		res.status(400).json('Error' + err)		
		next(err)
	}
})

//@route DELETE /users/:id
//@description User Delete - require Auth
//@access restricted
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

//@route GET /users/:id/edit
//@description User Edit - require Auth This route will allow them to edit their personal information
//@access restricted
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

//@route GET /users/:id
//@description Users Show Page: This route shows users dog matches require Auth
//@access restricted
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