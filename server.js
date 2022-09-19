const http = require("http")
const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")
const Quiz = require("./schema/quizs")
const router = require("./routes.js")
const bodyParser = require('body-parser')

const PORT = 5000
const url = "mongodb+srv://rula:rula@cluster0.mrzuj.mongodb.net/?retryWrites=true&w=majority"


app.use(cors(),express())
app.use(bodyParser.json())
app.use("/api",router)

async function startApp(){
    try{
        await mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true})
        app.listen(PORT,()=>{
            console.log("sucsefully conected with mongoDB")
        })
    }catch(e){
        console.log(e)
    }
}





startApp() 

// function f(a,b){
//     const [d1,u1] = [a.slice(0,2),a.slice(2,4)]
//     const [d2,u2] = [b.slice(0,2),b.slice(2,4)]
//     const rast1 = 
//     const dlina1 = u1[0]-d1[0]+1
//     const dlina2 = u2[0]-d2[0]+1
//     const shirina = u1[1]-d1[1]+1
//     const shirina2 = u2[1]-d2[1]+1

//     console.log(dlina1,dlina2)
//     console.log(shirina,shirina2)

//     if(dlina1+dlina2>shirina+shirina2){
//         return (shirina+shirina2)**2 
//     }else if (dlina1+dlina2<shirina+shirina2){
//         return (dlina1+dlina2)**2 
//     }else{
//         return (dlina1+dlina2)**2 
//     }
// }
// console.log(f("6688","1849"))


// function f(n,arr){
//     newArr = arr.map((item,index)=>{return item.split(" ").sort().join("")}).sort()
//     let counter = 1
//     let maxCount = 1
//     newArr.reduce((prev,now)=>{
//         if (prev == now){
//             counter++
//             maxCount = Math.max(maxCount,counter)
//             return now
//         }else{
//             counter = 1
//             return now
//         }
//     })
//     return maxCount
// } 

// console.log(f(5,["VLADIMIR IVAN ANDREY","VLADIMIR IVAN ANDREY","VLADIMIR IVAN ANDREY","VLADIMIR IVAN ANDREY","VLADIMIR IVAN ANDRE","VLADIMIR IVAN ANDRE","VLADIMIR IVAN ANDRE","VLADIMIR IVAN ANDRE","VLADIMIR IVAN ANDRE","VLADIMIR IVAN ANDRE","VLADIMIR IVAN ANDRE","VLADIMIR IVAN ANDRE","VLADIMIR IVAN ANDRE","VLADIMIR IVAN ANDRE","VLADIMIR sds ssdsd","VLADIMIR sds ssdsd","VLADIMIR sds ssdsd","VLADIMIR sds ssdsd","VLADIMIR sds ssdsd","VLADIMIR sds ssdsd","VLADIMIR sds ssdsd","VLADIMIR sds ssdsd","VLADIMIR sds ssdsd","VLADIMIR sds ssdsd","VLADIMIR sds ssdsd"]))



// function f(n,arr){
//     arr = arr.split(" ")
//     arr = arr.map((i)=>+i)
//     let indexMaxUnfollow = 0 
//     let indexMinFollow = 0
//     let maxUnfollow = 0
//     let minFollow = 1000000000000000000000000000000
//     arr.forEach((item,index)=> {
//         if (index % 2 != 0){
//             if (maxUnfollow < item){
//                 maxUnfollow = item
//                 indexMaxUnfollow = index
//             }
//         }else{
//             if (minFollow > item){
//                 minFollow = item
//                 indexMinFollow = index
//             }

//         }
//     })
//     arr[indexMaxUnfollow] = minFollow
//     arr[indexMinFollow] = maxUnfollow

//     return arr.reduce((prev,now,index)=>{
//         return (-1)**(index)* now + prev
//     }) 
// }


// console.log(f(3,"1 2 3 4 5"))


