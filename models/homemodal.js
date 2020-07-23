const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const home=new Schema({
    id :{
        type:Number,
        required:true
    },
    slider :{
        type:Boolean,
        default:false
    },
    feautured:{
        type:Boolean,
        default:false 
    },
    card :{
        type:Boolean,
        default:false
    },
    time :{
        type:String,
        required:true
    },
    date :{
        type:String,
        required:true
    },
    title :{
        type:String,
        required:true
    },
    type :{
        type:String,
        required:true
    },
    description :{
        type:String,
        required:true
    },
    image :{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    },
    link:{
        type:String,
        default:'#'
    },
    userProfile:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    quote:{
        type:String,
        required:true
    },
    quoteby:{
        type:String,
        required:true
    }
});
var Homedata = mongoose.model('homedata', home,'homedata');

module.exports = Homedata;