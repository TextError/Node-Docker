const mongoose = require("mongoose");


const PostScheema = new mongoose.Schema({
  title: {
    type: string,
    required: [true, 'Post must have title']
  },
  body: {
    type: string,
    required: [true, 'Post must have body']
  }
});

module.exports = PostModel = mongoose.model('post', PostScheema);