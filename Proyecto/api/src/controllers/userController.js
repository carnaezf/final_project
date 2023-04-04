const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { encryptKey, encryptExpiration } = process.env;
const { User, Order } = require("../db");
const { Comment } = require("../db");
const { superAdmin } = require("../controllers/userAdmin");

const createUser = async (
  name,
  lastName,
  email,
  password,
  dni,
  phone,
  birthDate,
  country,
  isAdmin,
  isModerator,
  rol
) => {
  let passwordHash = await bcrypt.hash(password, 10);
  let nameCapitalized =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  let lastNameCapitalized =
    lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
  let countryCapitalized =
    country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
  let emailLower = email.toLowerCase();
  if (
    isAdmin === undefined ||
    isAdmin === null ||
    isAdmin === "" ||
    isAdmin !== true
  )
    isAdmin = false;
  if (
    isModerator === undefined ||
    isModerator === null ||
    isModerator === "" ||
    isModerator !== true
  ) {
    isModerator = false;
  }
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
    isModerator,
    rol,
  });
  const Token = jwt.sign(
    {
      user: user,
    },
    encryptKey,
    { expiresIn: encryptExpiration }
  );

  return user, { msg: "User created", token: Token };
};

const getUserbyId = async (id) => {
  try {
    // te trae el usuario y los modelos asociados
    const user = await User.findByPk(id, {
      include: [
        {
          model: Comment,
        },
        {
          model: Order,
        },
      ],
    });
    if (!user) {
      throw new Error(`user id not found ${id}`);
    }
    return user;
  } catch (error) {
    return { error: error.message };
  }
};

const getAllUser = async () => {
  try {
    const users = await User.findAll({
      include: {
        model: Order,
      },
    });
    return users;
  } catch (error) {
    return { error: error.message };
  }
};

const updateUser = async (id, name, lastName, password, profilePicture) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error(`user id not found ${id}`);
    }
    if (name !== undefined && name !== null && name !== "") {
      let nameCapitalized =
        name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      user.name = nameCapitalized;
    }
    if (lastName !== undefined && lastName !== null && lastName !== "") {
      let lastNameCapitalized =
        lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
      user.lastName = lastNameCapitalized;
    }
    if (password !== undefined && password !== null && password !== "") {
      let passwordHash = await bcrypt.hash(password, 10);
      user.password = passwordHash;
    }
    if (
      profilePicture !== undefined &&
      profilePicture !== null &&
      profilePicture !== ""
    ) {
      user.profilePicture = profilePicture.toString();
    }
    await user.set(user);
    await user.save();
    return user;
  } catch (error) {
    return { error: error.message };
  }
};

const signInUser = async (email, password) => {
  let emailLower = email.toLowerCase();
  const user = await User.findOne({
    where: { email: emailLower },
  });
  if (!user) {
    throw new Error(`user email not found`);
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new Error(`password incorrect`);
  }
  if (user.isBanned === true) {
    throw new Error(`user banned`);
  }
  const Token = jwt.sign(
    {
      user: user,
    },
    encryptKey,
    { expiresIn: encryptExpiration }
  );
  if (user.isAdmin === true) {
    return {
      msg: "User logged",
      token: Token,
      user: "admin",
      name: user.name,
      id: user.userId,
    };
  }
  if (user.isModerator === true) {
    return {
      msg: "User logged",
      token: Token,
      user: "moderator",
      name: user.name,
      id: user.userId,
    };
  }
  return {
    msg: "User logged",
    token: Token,
    user: "user",
    name: user.name,
    id: user.userId,
  };
};

const googleSignIn = async (email, displayName, uid, isAdmin, isModerator) => {
  displayName = displayName.split(" ");
  let name = displayName[0];
  let lastName = displayName[1];
  let emailLower = email.toLowerCase();
  const user = await User.findOne({
    where: { email: emailLower },
  });
  if (!user) {
    let passwordHash = await bcrypt.hash(uid, 10);
    const user = await User.create({
      name,
      lastName,
      email: emailLower,
      password: passwordHash,
      isAdmin,
      isModerator,
    });
    const Token = jwt.sign(
      {
        user: user,
      },
      encryptKey,
      { expiresIn: encryptExpiration }
    );
    return {
      msg: "User created",
      token: Token,
      name: user.name,
      id: user.userId,
      user: "user",
    };
  }
  const Token = jwt.sign(
    {
      user: user,
    },
    encryptKey,
    { expiresIn: encryptExpiration }
  );
  if (user.isBanned === true) {
    throw new Error("user banned");
  }
  if (user.isAdmin === true) {
    return {
      msg: "User logged",
      token: Token,
      user: "admin",
      name: user.name,
      id: user.userId,
    };
  }
  if (user.isModerator === true) {
    return {
      msg: "User logged",
      token: Token,
      user: "moderator",
      name: user.name,
      id: user.userId,
    };
  }
  return {
    msg: "User logged",
    token: Token,
    user: "user",
    name: user.name,
    id: user.userId,
  };
};

const deleteUser = async (userId, rol, idAdmin) => {
  try {
    const admin = await superAdmin(rol);
    //console.log(admin,"esto es admin")
    //console.log(rol)
    if (rol === "superadmin") {
      if (admin.userId === idAdmin) {
        // console.log(admin.userId,"----------")
        await User.destroy({ where: { userId: userId } });
        return "The superadmin action has been executed";
      }
    }
    if (rol === "administrator") {
      const commonUserId = await User.findByPk(userId);
      console.log(commonUserId.dataValues.rol);
      if (commonUserId.dataValues.rol === "commonuser") {
        await User.destroy({ where: { userId: userId } });
        return "The administrator action has been executed";
      } else {
        return "The requested action cannot be done with the role entered";
      }
      // if(commonUserId)
    } else {
      return "Doesnt have the necessary role for the action";
    }
  } catch (error) {
    return { error: error.message };
  }
};

const userBanned = async (id) => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error(`user id not found ${id}`);
  }
  if (user.isBanned === true) {
    await user.set({ isBanned: false });
    await user.save();
    return user;
  }
  user.set({ isBanned: true });
  await user.save();
  return user;
};

const doModerator = async (id) => {
  const user = await User.findByPk(id);
  console.log(user);
  if (!user) {
    throw new Error(`user id not found ${id}`);
  }
  if (user.isModerator === true) {
    await user.set({ isModerator: false });
    await user.save();
    return user;
  }
  user.set({ isModerator: true });
  await user.save();
  return user;
};

module.exports = {
  createUser,
  getAllUser,
  updateUser,
  signInUser,
  googleSignIn,
  deleteUser,
  userBanned,
  doModerator,
  getUserbyId,
};
