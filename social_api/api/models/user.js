const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    comments: [{
        type: String
    }]

});

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  likes: {
    type: String,
  },
  post: {
    type: String,
  },
  comments: {
      type: [commentSchema]
  }
});

module.exports = mongoose.model("User", userSchema);
