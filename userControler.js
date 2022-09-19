
const User = require("./schema/user-demo") 
const bcrypt = require('bcryptjs')
class UserController{
    async create(req,res){
        try{
            const {userName,password} = req.body;
            console.log(userName);
            const hashPassword = bcrypt.hashSync(password,7); 
            console.log(hashPassword)
            const crUser = await User.create({userName,hashPassword});
            crUser.save()
        }catch(e){
            res.json("l")
            console.log(e)
            return 
        }
    }
    async authorisation(req,res){
        try{
            const {userName,password} = req.body;
            const user = await User.findOne({userName:userName})
            if (user.length == 0){
                return res.status(400).json({massage:"неверное имя пользователя или пароль"})
            }
            const validPassword = bcrypt.compareSync(password,user.hashPassword)
            if (!validPassword){
                return res.status(400).json({massage:"неверное имя пользователя или пароль"})
            }
            res.status(200).json(user)
        }catch{

        }
    }
    async addLastQuiz(req,res){
        try{
            const {userName,quiz} = req.body;
            const user1 = await User.findOneAndUpdate({userName:userName},{lastQuizs:quiz})
        }catch{

        }
    }
    
}


module.exports = new UserController()