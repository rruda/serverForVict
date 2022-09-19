const mongoose = require("mongoose")

const Quiz = new mongoose.Schema({
    title:{type:String,required:true},
    complexity:{type:String,required:true},
    author:{type:String,required:false},
    questions:{type:Array,required:true}
})

module.exports =  mongoose.model("Quiz",Quiz)