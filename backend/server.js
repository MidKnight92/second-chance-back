// require('dotenv').config
const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const methodOverride = require('method-override');
const PORT = 5000


const app = express()

app.listen(PORT, () => {
	console.log(`SERVER IS RUNNING ON PORT: ${PORT}`);
});
