
const { getProductById } = require("../../controllers/index");

const getByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const productId = await getProductById(id);
    res.status(200).json(productId);
  } catch (error) {
    res.status(404).json({ error: "Products by id not found" });
  }
  
};

module.exports = {
  getByIdHandler,
};
