const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	username: {type: String, required: true, trim: true, unique: true},
	password: {type: String, required: true},
	email: {type: String, required: true},
	zip_code: {type: String, required: true},
	adopting: {type: Boolean, required: true},
	// token: string

})


const User = mongoose.model('User', userSchema)


module.exports = User