const {User} = require("../../db")
const {getAllUser}=require ("../userController")

const mailsTotality=async()=>{
try {
    let mails=[]
    const users= await getAllUser()
    if(users){
        for(let i=0;i<users.length;i++){
            
            mails.push(users[i].email)
        }
        return mails
    }
} catch (error) {
    return ({error:error.message})
}



}


module.exports={
    mailsTotality
}