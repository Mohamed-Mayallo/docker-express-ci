const createCat = async (catModel) => {
  const kitty = new catModel({
    name: 'Zildjian - ' + Math.random(),
    age: 77
  });
  await kitty.save();
  return kitty;
};

module.exports = {
  createCat
};
