const { mailRegister } = require('../controllers/mailsControllers/mail-register')
const {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  signInUser,
  userBanned,
  doAdmin,
} = require("../controllers/userController.js");

const createUserHandler = async (req, res) => {
  const { name, lastName, email, password, dni, phone, birthDate, country,isAdmin,rol } =
  req.body;
  try {
      await mailRegister(name, email)
      const user = await createUser(
        name,
        lastName,
        email,
        password,
      dni,
      phone,
      birthDate,
      country,
      isAdmin,
      rol
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
  const { name, lastName, phone, birthDate, country, rol } = req.body;
  // console.log(id)
  try {
    const user = await updateUser(
      id,
      name,
      lastName,
      phone,
      birthDate,
      country,
      rol
    );
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const signInUserHandler = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await signInUser(email, password);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const googleSignInHandler = async (req, res) => {
  const { email, name, lastName, google, password } = req.body;

  try {
    const user = await googleSignIn(email, name, lastName, google, password);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const deleteUserHandler = async (req, res) => {
  try {
    const { userId } = req.params;
    const { rol, idAdmin } = req.body;

    const deleteAccion = await deleteUser(userId, rol, idAdmin);

    res.status(200).json(deleteAccion);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const userBannedHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userBanned(id);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const doAdminhandler = async (req, res) => {
  const { id } = req.params;
  console.log(id, "entro");
  try {
    const user = await doAdmin(id);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

module.exports = {
  createUserHandler,
  getAllUserHandler,
  updateUserHandler,
  signInUserHandler,
  googleSignInHandler,
  deleteUserHandler,
  userBannedHandler,
  doAdminhandler,
};
