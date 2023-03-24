const {
  createUser,
  getAllUser,
  updateUser,
} = require("../controllers/userController.js");

const createUserHandler = async (req, res) => {
  const { name, lastName, email, password, dni, phone, birthDate, country,isAdmin } =
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
      country,
      isAdmin
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

const updateUserHandler = async (req, res) => {
  const { id } = req.params;
  const { name, lastName, phone, birthDate, country } = req.body;

  try {
    const user = await updateUser(
      id,
      name,
      lastName,
      phone,
      birthDate,
      country
    );
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

module.exports = {
  createUserHandler,
  getAllUserHandler,
  updateUserHandler,
};
