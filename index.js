require('dotenv').config()



console.log("my name is aryan");
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/twitter",(req,res)=>{
    res.send('aryandotcom')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send("<h2>my youtube channel</h2>")

})
