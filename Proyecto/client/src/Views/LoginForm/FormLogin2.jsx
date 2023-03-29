import { useState } from "react";
import { useAuth } from "../../Contexts/authContext";
import { useHistory} from "react-router-dom"

const FormLogin2=()=>{

    const [user,setUser] = useState({
        email:"",
        password:"",
    })

    const {login , loginWithGoogle}= useAuth()
    const[error, setError] = useState()
    const history = useHistory()
    

        const handleChange = ({target:{name,value}}) => {
            // console.log(name, value)
            setUser({...user, [name]:value})
        }

            const handleSubmit = async (e) => {
                e.preventDefault()
                setError(" ")
                // console.log(user)
                try{
                    await login(user.email, user.password)
                    
                    history.push("/home");
                } catch(error){
                    setError(error.message)
                }
            }

        const handleGoogleSignin = async () =>{
            try {
                await loginWithGoogle()
                history.push("/home")
            } catch (error) {
                setError(error.message)
            }
        }

    return(
        <div className="flex flex-col bg-slate-200 dark:bg-zinc-800">
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="youremail@email.com" onChange={handleChange}/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={handleChange}/>

                <button>Login</button>
            </form>
            <button onClick={handleGoogleSignin}>Login with google</button>
        </div>
    )
}

export default FormLogin2;