const { getAllCategory } = require("../controllers/categoryController.js");

const allCategoryHandler = async (req, res) => {
  try {
    const categories = await getAllCategory();
    res.status(200).send(categories);
  } catch (error) {
    res.status(404).send({ msg: "Categories not found" });
  }
};

module.exports = {
  allCategoryHandler,
};
