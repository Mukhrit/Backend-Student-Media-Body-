const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  link: { type: String, default:'#' },
  content: { type: String, required: true },
});

module.exports = Blog = mongoose.model('blog', blogSchema,'blogs');
