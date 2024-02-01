const createCat = async (catModel) => {
  const kitty = new catModel({
    name: 'Zildjian - ' + Math.random()
  });
  await kitty.save();
  return kitty;
};

module.exports = {
  createCat
};
