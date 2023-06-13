console.log("Hello");
const express = require('express')
const app = express()
//route


app.get('/' , (req, res)=>{
    res.send('hello Node API')
})



app.listen(3500, ()=>{
    console.log('Node API is running on port 3500' )

})




