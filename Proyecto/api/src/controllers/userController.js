const { User } = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { createTokens } = require("../Token/tokenAdmin");
const { encryptKey, encryptExpiration } = process.env;

const createUser = async (
  name,
  lastName,
  email,
  password,
  dni,
  phone,
  birthDate,
  country,
  isAdmin
) => {
  let passwordHash = await bcrypt.hash(password, 10);
  let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
  let lastNameCapitalized =
    lastName.charAt(0).toUpperCase() + lastName.slice(1);
  let countryCapitalized = country.charAt(0).toUpperCase() + country.slice(1);
  let emailLower = email.toLowerCase();
  if (
    isAdmin === undefined ||
    isAdmin === null ||
    isAdmin === "" ||
    isAdmin !== true
  )
    isAdmin = false;
  const user = await User.create({
    name: nameCapitalized,
    lastName: lastNameCapitalized,
    email: emailLower,
    password: passwordHash,
    dni,
    phone,
    birthDate,
    country: countryCapitalized,
    isAdmin,
  });
  const tokens = createTokens(user);

  return { msg: "User created", tokens };
};

const getAllUser = async () => {
  const users = await User.findAll();
  return users;
};

const updateUser = async (id, name, lastName, phone, birthDate, country) => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error(`user id not found ${id}`);
  }
  await user.set({
    name,
    lastName,
    phone,
    birthDate,
    country,
  }); //lo actualiza
  await user.save(); //lo guarda

  return user;
};
//
const signInUser = async (email, password) => {
  let emailLower = email.toLowerCase();
  const user = await User.findOne({
    where: { email: emailLower },
  });
  if (!user) {
    throw new Error(`user email not found ${email}`);
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new Error(`password incorrect`);
  }
  const tokens = createTokens(user);

  return { msg: "User logged", tokens };
};

module.exports = {
  createUser,
  getAllUser,
  updateUser,
  signInUser,
};
