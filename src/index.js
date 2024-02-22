const express = require('express')
const { createCat } = require('./create-cat')
const { default: mongoose } = require('mongoose')

require('dotenv').config()

const app = express()

console.log(process.env.DB_URL, '..............')

let Cat

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log('Connected to mongod successfully!!!!')
    Cat = mongoose.model('Cat', { name: String, age: Number })
  })
  .catch((e) => {
    console.log('ERROR while mongo connection!!!!')
  })

app.get('/', async (req, res) => {
  const kitty = await createCat(Cat)
  res.json(kitty).send()
})

app.listen(4000, () => {
  console.log('Up and running ...')
})
