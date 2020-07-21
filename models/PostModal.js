const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  slider: { type: Boolean, required: true },
  featured: { type: Boolean, required: true },
  card: { type: Boolean, required: true },
  time: { type: String, required: true },
  date: { type: Date, required: true },
  title: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  button: { type: String, required: true },
  image: { type: String, required: true },
  user: { type: String, required: true },
  link: { type: String, required: true },
  userProfile: { type: String, required: true },
  quote: { type: String, required: true },
  quoteby: { type: String, required: true },
  content: { type: String, required: true },
});

module.exports = Post = mongoose.model('post', postSchema);
