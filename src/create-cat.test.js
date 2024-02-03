const { default: mongoose } = require('mongoose');
const { createCat } = require('./create-cat');

require('dotenv').config();

describe('create cat', () => {
  let Cat;
  let connection;

  beforeEach(async () => {
    try {
      connection = await mongoose.connect(process.env.DB_URL);
      Cat = mongoose.model('Cat', { name: String, age: Number });
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
    expect(kitty.age).toBe(10);
  });
});
