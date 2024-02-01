const { default: mongoose } = require('mongoose');

let Cat;

mongoose
  .connect('mongodb://root:example@mongo:27017/')
  .then(() => {
    console.log('Connected to mongod successfully!');
    Cat = mongoose.model('Cat', { name: String });
  })
  .catch((e) => {
    console.log('ERROR while mongo connection!');
  });

module.exports = {
  Cat
};
