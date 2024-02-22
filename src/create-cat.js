const createCat = async (CatModel) => {
  const kitty = new CatModel({
    name: 'Zildjian - ' + Math.random(),
    age: 77
  })
  await kitty.save()
  return kitty
}

module.exports = {
  createCat
}
