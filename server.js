// Require dependencies
require('dotenv').config()
require('./db/db.js')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session')
const methodOverride = require('method-override')
const cloudinary = require('cloudinary')
const PORT = process.env.PORT;
const app = express();
const userController = require('./controllers/userController.js')
const dogController = require('./controllers/dogController.js')

// Use dependencies
app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(bodyParser.json());

// Middleware
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({
	extended: false
}))

app.use(session({
	secret: process.env.SESSION_SECRET,
	saveUninitialized: false,
	resave: false
}))

// cloudinary.config({ 
//   cloud_name: process.env.CLOUD_NAME, 
//   api_key: process.env.ClOUDINARY_API_KEY, 
//   api_secret: process.env.ClOUDINARY_SECRET
// })

// Controllers
app.use('/users', userController)
app.use('/dogs', dogController)

//Port Connection  
app.listen(PORT, () => {
	console.log(`SERVER IS RUNNING ON PORT: ${PORT}`);
});
