<<<<<<< HEAD:Proyecto/api/src/handlers/FiltersHandler/getByIdHandler.js
const { getProductById } = require("../../controllers/index");
=======
const { getProductById } = require("../controllers/");
>>>>>>> f5de071f650ea1a9ed6b91d3b369a8115b04a145:Proyecto/api/src/handlers/getByIdHandler.js

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
