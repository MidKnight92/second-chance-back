// Require dependencies
require('dotenv').config()
// require('./db/db.js')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override')
const PORT = process.env.PORT;
const app = express();
const userController = require('./controllers/userController.js')
const dogController = require('./controllers/dogController.js')

// Use dependencies
app.use(cors());
app.use(bodyParser.json());

// Middleware
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({
	extended: false
}))
// app.use(session({
// 	secret: process.env.SESSION_SECRET,
// 	saveUninitialized: false,
// 	resave: false
// }))

// Controllers
// app.use('/', (req, res) => {
// 	res.send('Hello World')
// })
app.use('/users', userController)
app.use('/dogs', dogController)

//Port Connection  
app.listen(PORT, () => {
	console.log(`SERVER IS RUNNING ON PORT: ${PORT}`);
});
