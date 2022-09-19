const mongoose = require("mongoose")

const hh = new mongoose.Schema({
    userName:{type:String,unique:true,required:true},
    hashPassword:{type:String,required:true},
    countOfPassQuiz:{type:Number,required:true,default:0},
    lastQuizs:{type:Array,required:true,default:[]},
})

module.exports =  mongoose.model("hh",hh)