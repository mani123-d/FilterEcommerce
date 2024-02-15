const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware for Cross-Origin Resource Sharing (CORS)
app.use(cors({
    origin: 'http://localhost:3000'
}));

// MongoDB connection URI
const mongoURI = 'mongodb+srv://manisha:12345@cluster0.8jubn44.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB database
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('MongoDB Connection Error: ', err));

// Routes middleware
const routes = require('./Routers/Router');
app.use('/employee', routes);

// Port configuration
const port = 5000;

// Start the server
app.listen(port, () => {
    console.log("Server is running on port", port);
});
