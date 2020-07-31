const express = require('express');
const cors = require('cors');
var path = require('path');
const bodyParser = require('body-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
console.log('Starting the server');
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));



console.log('Connecting to MongoDB');
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) return console.error(err);
    console.log('MongoDB connection established');
  }
);
function auth (req, res, next) {
  var authHeader = req.headers.authorization;
  if (!authHeader) {
      var err = new Error('You are not authenticated!');
      res.setHeader('WWW-Authenticate', 'Basic');
      err.status = 401;
      next(err);
      return;
  }

  var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
  var user = auth[0];
  var pass = auth[1];
  if (user == process.env.api_user && pass == process.env.api_pass) {
      next(); // authorized
  } else {
      var err = new Error('You are not authenticated!');
      res.setHeader('WWW-Authenticate', 'Basic');      
      err.status = 401;
      next(err);
  }
}
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/feedback',auth, require('./routes/postfeedback'));
app.use('/api/data',auth, require('./routes/getHome'));
app.use('/api/Blog',auth,require('./routes/postBlog'));
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
