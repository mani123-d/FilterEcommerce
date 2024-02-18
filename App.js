const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const ejs=require('ejs')
const app = express();
const session=require('express-session')

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.set('view engine','ejs')
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
app.get('/fruits',(req,res)=>res.json({"fruits":"mango"}))
app.get('/vegetable',(req,res)=>{res.render('Sampledata')})
// Port configuration
const port = 5000;

// Start the server
app.listen(port, () => {
    console.log("Server is running on port", port);
});
