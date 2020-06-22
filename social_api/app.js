const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require("mongoose");



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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({}));
app.use(cors()); //CORS to enable api communication

// Routes import
const viewRoute = require('./api/routes/viewPost');
const postRoute = require('./api/routes/newPost');
const likeRoute = require('./api/routes/likes');
const deleteRoute = require('./api/routes/deletePost');

// Routes

app.use("/", viewRoute);
app.use('/post', postRoute);
app.use('/likes', likeRoute);
app.use('/postDelete', deleteRoute);


// Error handling
app.use((req, res, next) => {
    const error = new Error("not found");
    error.status = 404;
    next(error);
  });
  
  app.use((error, req, res) => {
    req.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
  });


// Server start up
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});