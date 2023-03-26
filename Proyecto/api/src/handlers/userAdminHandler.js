const {optionsAdminEditUser}= require("../controllers/userAdmin")



// const userAdminHandler= async(req, res)=>{
// try {
//     const {name,lastName,email,password,dni,phone,birthDate,country}= req.body
//     const cresteUserAdmin= await optionsAdmincresteUser(name,lastName,email,password,dni,phone,birthDate,country,isAdmin=false)
//     res.status(200).json(cresteUserAdmin)
// } catch (error) {
//     res.status(400).json({error:error.message})
// }


// }

// const optionsAdminDeleteUserHandler = async(req,res)=>{
//     try {
//         const {userId}= req.params
//         const {idAdmin}= req.body
//         await optionsAdminDeleteUser(userId,idAdmin)
//         res.status(200).json(`The user with id : ${userId} has been removed.`)
        
//     } catch (error) {
//         res.status(400).json({error:error.message})
//     }
// }

const optionsAdminEditUserHandler= async (req,res)=>{
try {
   const {userId,rol}= req.params
    const {isAdmin,name,lastName,password,phone,country}=req.body
    
        const userPut= optionsAdminEditUser(userId,rol,isAdmin,name,lastName,password,phone,country)
            res.status(200).json(userPut)
    
} catch (error) {
    res.status(400).json({error:error.message})
}
}





module.exports={

    optionsAdminEditUserHandler
}