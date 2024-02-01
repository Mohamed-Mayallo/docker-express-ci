const express = require('express');
const { createCat } = require('./create-cat');
const { mongoose } = require('mongoose');

const app = express();

let Cat;

mongoose
  .connect('mongodb://127.0.0.1:27017/hey')
  // .connect('mongodb://root:example@mongo:27017/')
  .then(() => {
    console.log('Connected to mongod successfully!');
    Cat = mongoose.model('Cat', { name: String });
  })
  .catch((e) => {
    console.log('ERROR while mongo connection!');
  });

app.get('/', async (req, res) => {
  const kitty = await createCat(Cat);
  res.json(kitty).send();
});

app.listen(4000, () => {
  console.log('Up and running ...');
});
