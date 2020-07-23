const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Homedata = require('../models/homemodal');

const homeRouter = express.Router();

homeRouter.use(bodyParser.json());

homeRouter.route('/')
.get((req,res,next) => {
    Homedata.find({})
    .then((data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(data);
    }, (err) => next(err))
    .catch((err) => next(err));
});
module.exports = homeRouter;
