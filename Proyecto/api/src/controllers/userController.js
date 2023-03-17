const { User } = require("../db");

const createUser = async (
  name,
  lastName,
  email,
  password,
  dni,
  phone,
  birthDate,
  country
) => {
  const user = await User.create({
    name,
    lastName,
    email,
    password,
    dni,
    phone,
    birthDate,
    country,
  });

  return "User created";
};

const getAllUser = async () => {
  const users = await User.findAll();
  return users;
};

module.exports = {
  createUser,
  getAllUser,
};
