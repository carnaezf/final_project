import { Formik } from "formik";
//import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../Contexts/authContext";
import { useHistory } from "react-router-dom";
import { loginUsers } from "../../Redux/actions";

const Login=()=>{
    //const [post, setPost]= useState({});
    const {login , loginWithGoogle}= useAuth()
    const history = useHistory()
    const dispatch = useDispatch()

    const handleGoogle= async ()=>{
        //console.log("Email Enviado");
        try{
            await loginWithGoogle()
            history.push("/shoppingBag");
        } catch(error){
            alert("Login invalido")
        }
    }    

    return(
        <div className="w-full max-w-xs m-auto">
            
            <Formik
                initialValues={{
                    email:"",
                    password:"",
                }}

                validate={(values)=>{
                    let error={};
                    
                    if(!values.email){
                        error.email="enter email"
                    }
                    else{
                        if(! /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                            error.email="invalid email"
                        }
                    }
                    if(!values.password){
                        error.password="invalid password";
                    }
                    return error;

                }} 

                onSubmit={async (values,props)=>{
                    //console.log("Email Enviado");
                    try{
                        dispatch(loginUsers(values))
                        await login(values.email, values.password)
                        // console.log(user)
                        alert("Login")
                        history.push("/shoppingBag");
                    } catch(error){
                        alert("Login invalido")
                    }
                   
                    // console.log(values);
                    // dispatch(postUsers(values));
                    props.resetForm()
                }}>
                {/* handleGoogle={async (values,props)=>{
                    //console.log("Email Enviado");
                    try{
                        await loginWithGoogle()
                        history.push("/shoppingBag");
                    } catch(error){
                        alert("Login invalido")
                    }
                   
                    // console.log(values);
                    // dispatch(postUsers(values));
                    props.resetForm()
                }}>
                 */}
                {(props)=>(
                    <form  onSubmit={props.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        {/* {console.log(props.errors)} */}
                        {/* {console.log(props.touched)} */}
                        
                        <div className="mb-4">
                            <label htmlFor="name">Email</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text" 
                                id="email" 
                                name="email" 
                                placeholder="  Wil@email.com" 
                                value={props.values.email}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}//validar fuera del input
                            />
                            {props.touched.email && props.errors.email && <span className=" bg-red text-red-700">{props.errors.email}</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="name">Password</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text" 
                                id="password" 
                                name="password" 
                                placeholder=" **********" 
                                value={props.values.password}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}//validar fuera del input
                            />
                            {props.touched.password && props.errors.password && <span className=" bg-red text-red-700">{props.errors.password}</span>}
                        </div>
                        <button  type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  px rounded focus:outline-none focus:shadow-outline">Login</button>
    
                    </form>

                )}
            </Formik>
            <button  onClick={handleGoogle} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Google</button>
        </div>
    )
}

export default Login;