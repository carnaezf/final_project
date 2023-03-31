
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { encryptKey, encryptExpiration } = process.env;
const { User,Order } = require("../db");
const {superAdmin}= require("../controllers/userAdmin")

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
  rol

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
    rol

  });
  const Token = jwt.sign(
    {
      user: user,
    },
    encryptKey,
    { expiresIn: encryptExpiration }
  );

  return (user,{ msg: "User created", token: Token });
};

const getAllUser = async () => {
  try {
    const users = await User.findAll({
      include:{
        model:Order
      }
    });
    return users;
  } catch (error) {
    return ({error:error.message})
  }

};

const updateUser = async (id, name, lastName, phone, birthDate, country,rol) => {
  try {
    

  const user = await User.findByPk(id);
  if (!user) {
    throw new Error(`user id not found ${id}`);
  }
 // console.log(user)
  const dataAdmin= await superAdmin(rol)
  const rolAdmin= dataAdmin.rol
  //console.log(dataAdmin,"aca esta dataaaaa admin")
  //console.log(rolAdmin) 
  if( rolAdmin !== "superadmin" && rolAdmin !== "administrator" ){

    await user.set({
      name,
      lastName,
      phone,
      birthDate,
      country,
    }); //lo actualiza
    await user.save(); //lo guarda
  
    return user;
  }else{
    return "Can't edit SUPER ADMIN 😅, change ID  "
  }
} catch (error) {
  return ({error:error.message})
}
  
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
  const Token = jwt.sign(
    {
      user: user,
    },
    encryptKey,
    { expiresIn: encryptExpiration }
    );
   
    return { msg: "User logged", token: Token};
};

const googleSignIn = async (email, name, lastName, google, password) => {
  let emailLower = email.toLowerCase();
  const user = await User.findOne({
    where: { email: emailLower },
  });
  if (!user) {
    let passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      lastName,
      email: emailLower,
      google,
      password: passwordHash,
    });
    const token = jwt.sign(
      {
        user: user,
      },
      encryptKey,
      { expiresIn: encryptExpiration }
    );
    return { msg: "User created", token: token };
  }
  const token = jwt.sign(
    {
      user: user,
    },
    encryptKey,
    { expiresIn: encryptExpiration }
  );
  return { msg: "User logged", token: token };
};

const deleteUser=async(userId,rol,idAdmin)=>{
try {
  const admin= await superAdmin(rol)
  //console.log(admin,"esto es admin")
  //console.log(rol)
  if(rol==="superadmin"){
    if(admin.userId=== idAdmin){
     // console.log(admin.userId,"----------")
    await User.destroy({where:{userId:userId}})
    return "The superadmin action has been executed"
   }
  }
  if(rol==="administrator"){
    const commonUserId= await User.findByPk(userId)
    console.log(commonUserId.dataValues.rol)
    if(commonUserId.dataValues.rol==="commonuser"){
      await User.destroy({where:{userId:userId}})
      return "The administrator action has been executed"
    }else{
      return "The requested action cannot be done with the role entered"
    }
    // if(commonUserId)
  }else{
    return "Doesnt have the necessary role for the action"
  }
} catch (error) {
  return ({error:error.message})
}
  
}

module.exports = {
  createUser,
  getAllUser,
  updateUser,
  signInUser,
  googleSignIn,
  deleteUser

};
