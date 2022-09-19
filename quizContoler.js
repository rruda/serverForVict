const Quiz = require("./schema/quizs")
const ObjectId = require('mongodb').ObjectID;
class QuizController{
    async create(req,res){
        try{
            const {title,complexity,author,questions} = req.body;
            console.log(req.body)
            const quiz = await Quiz.create({title,complexity,author,questions})
            res.json("sucsess")
            return 
        }
        catch(e){
            res.json("l")
            console.log(e)
            return 
        }
    }
    async getQuiz(req,res){
        try{
            const quiz = await Quiz.find()
            console.log(quiz)
            res.json(quiz)
        }
        catch(e){
            console.log(e)
            res.status(500).json(e)
        }
    }
    async getQuizByID(req,res){
        try{
            const quiz = await Quiz.find({"_id":ObjectId(req.query)})
            res.json(quiz)
            console.log(quiz)
        }
        catch(e){
            console.log(e)
            res.status(500).json(e)
        }
    }
    async getQuizByAuthor(req,res){
        try{
            const quiz = await Quiz.find({author:req.query.author})
            res.json(quiz)
        }
        catch(e){
            console.log(e)
            res.status(500).json(e)
        }
    }
    async getQuizByName(req,res){
        try{
            const quiz = await Quiz.find({title:req.query.name})
            res.json(quiz)
        }
        catch(e){
            console.log(e)
            res.status(500).json(e)
        }
    }
}

module.exports =  new QuizController()