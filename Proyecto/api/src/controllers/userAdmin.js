 const {User}=require("../db")
 

const superAdmin= async (rol)=>{
    try {

        if(rol==="superadmin"){

            const user= await User.findOne({
                where:{
                    rol:rol
                }
            })
            //console.log(user)
            //console.log(user.dataValues)
            return user.dataValues
        }else{
            "You are not the administrator"
        }
        
    } catch (error) {
        return ({error:error.message})
    }
   
}



//  const optionsAdmincresteUser=async(name,lastName,email,password,dni,phone,birthDate,country,isAdmin,nameAdmin,passwordAdmin )=>{
//      try {
//         const admin= await superAdmin (nameAdmin,passwordAdmin)
//         const nameA= admin.name
//         const passwordA= admin.password
//        console.log(nameAdmin)
//        console.log(passwordAdmin)
//         if(nameA && passwordA){
//             const createUserforAdmin = await createUser(name,lastName,email,password,dni,phone,birthDate,country,isAdmin)
//             return createUserforAdmin
//         }
// } catch (error) {
//     return ({error:error.message})
// }
//  }


// const optionsAdminDeleteUser= async(userId,rol)=>{
// try {
//     const admin= await superAdmin (rol)
//     const idAdministrator= admin.userId
    
//     console.log(idAdministrator)
//     if(idAdministrator){
//         const userWhitDelete= await User.destroy({where:{userId:userId}})
        
//         return userWhitDelete
//     }else{
//         "EERROR EN BORRAR EL USUARIO"
//     }
  
// } catch (error) {
//     return ({error:error.message})
// }
// }

const optionsAdminEditUser= async(userId,rol,isAdmin,name,lastName,password,phone,country)=>{
    try {
    const adminData= await superAdmin(rol)
    //console.log(adminData.rol,"---------")
   //console.log(idAdministrador, "id administrador en el controler de edit user")
    if(adminData.rol==="superadmin"){
        const usersTotal= await User.findByPk(userId)
        //console.log(usersTotal)
        const userModifi = await  usersTotal.set({isAdmin:isAdmin, name:name,lastName:lastName, password:password, country:country,phone:phone })
        await userModifi.save()
        return userModifi
    }else{
       return " You are not the administrator, you cannot perform this action"
    }
} catch (error) {
    return ({error:error.message})
}

}


 module.exports={
    superAdmin,
    optionsAdminEditUser
 }