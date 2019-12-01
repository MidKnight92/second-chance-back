const express = require('express')
const router = express.Router()
const superagent = require('superagent')
const Buffer = require('buffer/').Buffer
const Dog = require('../models/dog.js')
const User = require('../models/user.js')


router.get('/', (req, res) => {
	res.json('Hitting dog Controller')
})

//@route GET /dogs/new
//@description User Looking to Rehome their dog Routes - This route will show a form of dog criteria for the user to fill out in order to create a profile for their dog to be inserted into the rehoming section
router.get('/new', (req, res) => {
	adopted
})

//@route POST /dogs
router.post('/new', async (req, res, next) => {
	try {
		if (req.body.good_with_children === 'on') {
			req.body.good_with_children = true;
		} else {
			req.body.good_with_children = false;
		}
		if (req.body.good_with_dogs === 'on') {
			req.body.good_with_dogs = true;
		} else {
			req.body.good_with_dogs = false;
		}
		if (req.body.good_with_cats === 'on') {
			req.body.good_with_cats = true;
		} else {
			req.body.good_with_cats = false;
		}
		if (req.body.adopted === 'on') {
			req.body.adopted = true;
		} else {
			req.body.adopted = false;
		}
		if (req.session.loggedIn === true){
			const dog = {
				user: req.session.userId,
				name: req.body.name,
				breed: req.body.breed,
				adopted: req.body.adopted,
				size: req.body.size,
				age: req.body.age,
				coat: req.body.coat,
				good_with_children: req.body.good_with_children,
				good_with_dogs: req.body.good_with_dogs,
				good_with_cats: req.body.good_with_cats,
				image: req.body.image
			}
			const savedDog = await Dog.create(dog)
			res.json('Dog Info added:', savedDog )
			// res.redirect('/dogs/:id')
		} else {
			req.session.logOutMsg = 'You need to create an account';
			res.json('Not authorized to do that')
			// res.redirect('/users/login')
		}
	}

	catch (err) {
		res.status(400).json('Error' + err)
		next(err)
	}
})
//@route GET /dogs/:id
//@description This route will allow Users to see their dogs’ profile page
router.get('/:id', async (req, res, next) => {
	try {
		const dogs = await Dog.find({user: req.session.userId});
		res.json({
			dog: dogs,
			userId: req.session.userId
		})
	}
	catch (err) {
		res.status(400).json('Error' + err)
		next(err)
	}
})

//@route GET /dogs/:id/edit
//@description This route will allow Users to edit their dogs’ profile page -- require auth’d user to be that dogs owner
router.get('/:id/edit', async (req, res, next) => {
	try {
		const oneDog = await Dog.findById(req.params.id);
		res.json({
			dog: oneDog
		})
	}
	catch (err) {
		res.status(400).json('Error' + err)		
		next(err)
	}
})

//@route PUT /dogs/:id
router.put('/:id', async (req, res, next) => {
	try {
		const updatedDogInfo = {
			user: req.session.userId,
			name: req.body.name,
			breed: req.body.breed,
			adopted: req.body.adopted,
			size: req.body.size,
			age: req.body.age,
			coat: req.body.coat,
			good_with_children: req.body.good_with_children,
			good_with_dogs: req.body.good_with_dogs,
			good_with_cats: req.body.good_with_cats,
			image: req.body.image
		}
		const dog = await Dog.findByIdAndUpdate(req.params.id, updatedDogInfo)
			// res.redirect('/dogs/:id')
			res.json('Dog updated')
	}
	catch (err) {
		res.status(400).json('Error' + err)
		next(err)
	}
})

// Routes using PetFinder API below
	// GET https://api.petfinder.com/v2/{CATEGORY}/{ACTION}?{parameter_1}={value_1}&{parameter_2}={value_2}

//@route GET /dogs/shelter
//@description Shelter Dogs Index
router.get('/shelter', async (req, res, next) => {
	const token = process.env.TOKEN_TYPE
	const apiKey = process.env.API_KEY;
	const url  = 'https://api.petfinder.com/v2/animals?type=dog&color=black'; 
	const headers = {
		host: url,
		method: 'GET',

		headers: {
			'X-AUTH-Token': apiKey
		}
	};
	let data = '';

})

//@route GET /dogs/shelter/:id
//@description Shelter Dog Show Page
// GET https://api.petfinder.com/v2/animals/{id}


//@route GET /dogs/rehome
//@description Home to Rehome Dogs Index

//@route GET /dogs/rehome/:id
//@description Home to Rehome Dog Show Page

module.exports = router