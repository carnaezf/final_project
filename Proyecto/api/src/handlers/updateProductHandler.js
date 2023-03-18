const { updateProduct } = require("../controllers/updateProduct");

const updateProductHandler = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const product = await updateProduct(id, body);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  updateProductHandler,
};
