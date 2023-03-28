import { Formik } from "formik";
//import { useState } from "react";
import { useDispatch } from "react-redux";
import { postUsers } from "../../Redux/actions";

const FormLogin=()=>{
    //const [post, setPost]= useState({});
    const dispatch = useDispatch()
    return(
        <div className="w-full max-w-xs m-auto">
            <Formik
                initialValues={{
                    name:"",
                    email:""
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
                    if(!values.email){
                        error.email="enter email"
                    }
                    else{
                        if(! /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                            error.email="invalid email"
                        }
                    }
                    return error;

                }} 

                onSubmit={(values,props)=>{
                    //console.log("Email Enviado");
                    console.log(values);
                    dispatch(postUsers(values));
                    props.resetForm()
                }}>
                
                {(props)=>(
                    <form  onSubmit={props.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        {/* {console.log(props.errors)} */}
                        {/* {console.log(props.touched)} */}
                        <div className="mb-4">
                            <label htmlFor="name" >Name</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="  Wil" 
                                value={props.values.name}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                            />
                            {props.touched.name && props.errors.name && <span className=" bg-red text-red-700" >{props.errors.name}</span>}
                        </div>
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
                        <button  type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
    
                    </form>

                )}
            </Formik>
            
        </div>
    )
}

export default FormLogin;