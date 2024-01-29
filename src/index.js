const express = require('express');
const mongoose = require('mongoose');

const app = express();

let Cat;
mongoose
  .connect('mongodb://root:example@mongo:27017/')
  .then(() => {
    Cat = mongoose.model('Cat', { name: String });
    console.log('Connected to mongod successfully!');
  })
  .catch((e) => {
    console.log('ERROR while mongo connection!');
  });

app.get('/', async (req, res) => {
  const kitty = new Cat({
    name: 'Zildjian - ' + Math.random(),
    age: Math.floor(Math.random() * 10),
    hello: 'world2'
  });
  await kitty.save();

  res.json(kitty).send();
});

app.listen(4000, () => {
  console.log('Up and running ...');
});
