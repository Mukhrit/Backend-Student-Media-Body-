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
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/feedback', require('./routes/postfeedback'));
app.use('/api/data', require('./routes/getHome'));
app.use('/api/Blog',require('./routes/postBlog'));
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/public/index.html'));
});


console.log('Connecting to MongoDB');
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) return console.error(err);
    console.log('MongoDB connection established');
  }
);

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
