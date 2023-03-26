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
  const user = await User.create({
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
  });

  return "User created";
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
  deleteUser
};
