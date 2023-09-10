
const allProducts = (req, res) => {
  const username=req.tokenDecoded.username
  console.log(username);
  res.send("all products");
};

const add = (req, res) => {
  const { body } = req;
  res.send(body);
};

const remove = (req, res) => {
  const { body } = req;
  res.send(body);
};

const update = (req, res) => {
  const { body } = req;
  res.send(body);
};

module.exports = { allProducts, add, remove, update }
