import { Formik } from "formik";
//import { useState } from "react";
import { useDispatch } from "react-redux";
import { postUsers } from "../../Redux/actions";

import {useAuth} from "../../Contexts/authContext";
import { useHistory} from "react-router-dom";
import {loginUsers} from "../../Redux/actions";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";




// import { getAuth, updateProfile } from "firebase/auth";
// const auth = getAuth();
// updateProfile(auth.currentUser, {
//   displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
// }).then(() => {
//   // Profile updated!
//   // ...
// }).catch((error) => {
//   // An error occurred
//   // ...
// });




const Register=()=>{
    //const [post, setPost]= useState({});
    const dispatch = useDispatch();
    
    const {signUp}=useAuth();
    const history=useHistory();

    return(
        <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center lg:w-1/2 bg-slate-50">
                <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
                    <div class="text-4xl font-extrabold ...">
                        <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                        Registration in Haal
                        </span>
                    </div>
                    <Formik
                        initialValues={{
                            name:"",
                            lastName:"",
                            email:"",
                            password:"",
                            country:"",
                        }}

                        validate={(values)=>{
                            let error={};
                            if(!values.name){
                                error.name="enter name"
                            }
                            else{
                                if(! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
                                    error.name="name without numbers or symbols"
                                }
                            }
                            if(!values.lastName){
                                error.lastName="enter last name"
                            }
                            else{
                                if(! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastName)){
                                    error.lastName="last name without numbers or symbols"
                                }
                            }
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
                            else{
                                if(! /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/.test(values.password)){
                                    error.password="between 9-15 characters with @,A,a,1 NO #"
                                }
                            }
                            if(!values.country){
                                error.country="enter country"
                            }
                            else{
                                if(! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.country)){
                                    error.country="country without numbers or symbols"
                                }
                            }
                            return error;

                        }} 

                        onSubmit={(values,props)=>{
                  
                            dispatch(postUsers(values));
                            signUp(values.email,values.password,values.name);
                            dispatch(loginUsers(values.email,values.password,values.name))//!agregado
                            props.resetForm();
                            Swal.fire({
                                icon: "success",
                                title: "Registered Welcome!",
                                text: "you are already part of Haal!",
                                backdrop:true,
                            });
                    
                            history.push("/login");
                    
                        }}>
                
                        {(props)=>(
                            <form  onSubmit={props.handleSubmit} className="mt-4">
                                {/* {console.log(props.errors)} */}
                                {/* {console.log(props.touched)} */}
                                <div className="mb-4 "> 
                                    <label htmlFor="name" className="text-lg text-current" >Name</label>
                                    <input className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        placeholder=" ej: Wil" 
                                        value={props.values.name}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                    />
                                    {props.touched.name && props.errors.name && <span className=" bg-red text-sm text-red-700" >{props.errors.name}</span>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="name" className="text-lg text-current">Last Name</label>
                                    <input className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                                        type="text" 
                                        id="lastName" 
                                        name="lastName" 
                                        placeholder=" ej: Smith" 
                                        value={props.values.lastName}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}//validar fuera del input
                                    />
                                    {props.touched.lastName && props.errors.lastName && <span className=" bg-red text-sm text-red-700">{props.errors.lastName}</span>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="name" className="text-lg text-current">Email</label>
                                    <input className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                                        type="text" 
                                        id="email" 
                                        name="email" 
                                        placeholder=" ej: Wil@email.com" 
                                        value={props.values.email}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}//validar fuera del input
                                    />
                                    {props.touched.email && props.errors.email && <span className=" bg-red text-sm text-red-700">{props.errors.email}</span>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="name" className="text-lg text-current">Password</label>
                                    <input className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                                        type="password" 
                                        id="password" 
                                        name="password" 
                                        placeholder=" ej: Smith" 
                                        value={props.values.password}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}//validar fuera del input
                                    />
                                    {props.touched.password && props.errors.password && <span className=" bg-red text-sm text-red-700">{props.errors.password}</span>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="name" className="text-lg text-current">Country</label>
                                    <input className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                                        type="text" 
                                        id="country" 
                                        name="country" 
                                        placeholder=" ej: Argentina" 
                                        value={props.values.country}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}//validar fuera del input
                                    />
                                    {props.touched.country && props.errors.country && <span className=" bg-red text-sm text-red-700">{props.errors.country}</span>}
                                </div>
                                <div className="mt-8 flex justify-between items-center">
                                    <div>
                                        <input type="checkbox" id="remember" />
                                        <label for="remember" className="ml-2 font-medium text-base text-violet-500">  I accept the terms and conditions</label>
                                        <Link to="/home" className="flex mt-8 text-violet-500 text-lg font-small no-underline hover:underline">I do not accept the terms and conditions, Back to Home</Link>
                                    </div>
                                </div>
                                <div className="mt-8 flex flex-col gap-y-4">
                                    <button  type="submit" className="active:scale-[0.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold ">Register</button>
                                </div>
                        
                                
                        
    
                            </form>

                        )}
                    </Formik>

                </div>
            </div>

            <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-slate-50 ">
                <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-ping " />
                <div className="w-full h-1/2 absolute bottom-0 " />

            </div>
            
           
            
        </div>
    )
}


export default Register;
