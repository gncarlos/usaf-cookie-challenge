const express = require('express')
const app = express()
const port = 3002
const cookieParser = require('cookie-parser')

app.get('/', (req, res) => res.send('Hello World!'))

app.use(cookieParser)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

app.get('/login', (req, res) => {
  let name = req.query.name
  if(name){
    res.cookie("name", name)
    res.send('Name cookie set')
  } else {
    res.send('Cookie not set, try again')
  }
})

app.get('/hello', (req, res) => {
  let name = req.cookies.name
  if(name){
    res.send(`Hello ${name}`)
  } else {
    res.send(`No cookie set from /login`)
  }
  res.end()
})