const express = require('express');
const bodyParser = require('body-parser');

const feedbackrouter = express.Router();
const Feedbacks = require('../models/feedmodal');
feedbackrouter.use(bodyParser.json());
feedbackrouter.route('/')
.post((req,res,next)=>{
    Feedbacks.create(req.body)
    .then((feed) => {
        console.log('Feedback Created ', feed);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(feed);
    }, (err) => next(err))
    .catch((err) => next(err));
}
);
module.exports=feedbackrouter;