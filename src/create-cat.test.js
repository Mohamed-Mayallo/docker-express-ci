const { default: mongoose } = require('mongoose');
const { createCat } = require('./create-cat');

describe('create cat', () => {
  let Cat;
  let connection;

  beforeEach(async () => {
    try {
      connection = await mongoose.connect('mongodb://127.0.0.1:27017/hey');
      Cat = mongoose.model('Cat', { name: String });
    } catch (e) {
      console.log(e, '-----------');
    }
  });

  afterEach(async () => {
    Cat = null;
    await connection.disconnect();
  });

  it('should return a new kitty', async () => {
    const kitty = await createCat(Cat);

    expect(kitty).toBeDefined();
    expect(kitty.name).toContain('Zildjian');
  });
});
