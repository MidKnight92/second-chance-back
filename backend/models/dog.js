const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	name: {type: String, required: true},
	description: String,
	breed: String,
	adopted: Boolean,
	size: String,
	age: String,
	coat: String,
	good_with_children: Boolean,
	good_with_dogs: Boolean,
	good_with_cats: Boolean,
	image: String,

})

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog