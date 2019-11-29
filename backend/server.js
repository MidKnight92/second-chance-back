require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override')
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', (req, res) => {
	res.send('Hello World')
})

app.listen(PORT, () => {
	console.log(`SERVER IS RUNNING ON PORT: ${PORT}`);
});
