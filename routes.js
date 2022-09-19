const {Router} = require("express")
const Quiz = require("./schema/quizs")
const UserController = require("./userControler")
const quizContoler = require("./quizContoler")
const router = new Router()

router.get("/hi",(req,res)=>{console.log()})
router.post("/quiz",quizContoler.create)
router.get("/quiz",quizContoler.getQuiz)
router.get("/quizByID",quizContoler.getQuizByID)
router.get("/quizByAuthor",quizContoler.getQuizByAuthor)
router.get("/quizByName",quizContoler.getQuizByName)


router.post("/user",UserController.create)
router.post("/authorisation",UserController.authorisation)
router.post("/addLastQuiz",UserController.addLastQuiz)



module.exports = router

