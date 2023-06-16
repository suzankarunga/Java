console.log("Hello");
const express = require('express')
const app = express()
//route


app.get('/' , (req, res)=>{
    res.send('hello Node API')
})



app.listen(3000, ()=>{
    console.log("Node API is running on port 3000" )

})
const port = 4000; // Change the port number to an available port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});





