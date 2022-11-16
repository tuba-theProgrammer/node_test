
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const Test = require('./modules/test.controller')
//Test.solution();
//Test.Newsolution();

app.get('/test/Solution',(req,res)=>{
    //Test.Newsolution()
    res.send(Test.Newsolution())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
