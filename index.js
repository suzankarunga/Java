
const express = require("express");
const  mangoose =require(mangoose)
mongoose.connect("mongodb://localhost:27017")
const app = express()
mongoose.connect("mangodb:\\localhost:27017/latestdb"),{
    useNewUrlParser:true,useUnifiedTopology:true
},(err)=>{
    if (err)
    {
        console.log(err)
    }else{
        console.log("Successfully Connected")
    }

}

