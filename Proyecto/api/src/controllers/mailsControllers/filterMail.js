const {User} = require("../../db")
const {getAllUser}=require ("../userController")

const mailsTotality=async()=>{
try {
    console.log("hola")
    let mails=[]
    const users= await getAllUser()
    console.log(users)
    if(users){
        for(let i=0;i<users.length;i++){
            
            mails.push(users[i].email)
        }
        console.log(mails,"estos son los mails de back")
        return mails
    }
} catch (error) {
    return ({error:error.message})
}



}


module.exports={
    mailsTotality
}