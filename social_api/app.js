const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require("mongoose");

// Routes import



const app = express();

// Database connect
const DATABASE_URL = 'mongodb://localhost:27017';

 mongoose.connect(
  DATABASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  },
  (err) => {
    if(err){
      console.log(err);
    }else{
      console.log('Database connection established');
    }
  }
);

// Middleware configs



// Routes

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'connection is succesful'
    });
});


// Server start up
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});