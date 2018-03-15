require ('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const { SERVER_PORT } = process.env
const app = express()


const todos = [
  {id: 1, title: 'cookies', description: 'get lots of cookies'},
  {id: 2, title: 'milk', description: 'get milk, not skim, maybe chocolate'}
]
let id = 2;

app.use(bodyParser.json())
// massive

app.get('/api/todos', (req, res) => {
  // db fn that gets todos
  res.status(200).send(todos)
})

app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}.`))