const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//Configure environment variables
require('dotenv').config();

//Create server
const app = express();
//Set port
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json()); 

//Connect to MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
})

//Routes
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

//Listen for server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})