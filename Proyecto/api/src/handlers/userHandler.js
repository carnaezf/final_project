const { createUser, getAllUser } = require("../controllers/userController.js");

const createUserHandler = async (req, res) => {
  const { name, lastName, email, password, dni, phone, birthDate, country } =
    req.body;

  try {
    const user = await createUser(
      name,
      lastName,
      email,
      password,
      dni,
      phone,
      birthDate,
      country
    );
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const getAllUserHandler = async (req, res) => {
  try {
    const users = await getAllUser();
    res.status(200).send(users);
  } catch (error) {
    res.status(404).send({ msg: "Users not found" });
  }
};
module.exports = {
  createUserHandler,
  getAllUserHandler,
};
