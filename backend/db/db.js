const mongoose = require('mongoose')
// const connectionString = process.env.MONGODB_URI
const connectionString = 'mongodb://localhost/secondchance';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});
mongoose.connection.on('error', (err) => {
    console.log('Mongoose error: ', err);
});