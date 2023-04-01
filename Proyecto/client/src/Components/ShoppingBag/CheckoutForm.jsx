import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import { ShoppingBagContext } from '../../Contexts/ShoppingBagContext';



const CheckoutForm = () => {

    const [emails, setEmails] = useState({});
    const [user, setUser] = useState({});
    const [shoppingBag, setShoppingBag] = useContext(ShoppingBagContext)
   const [buy,setBuy]=useState({});

    useEffect(async() => {
        const users= await axios("http://localhost:3001/user/totalMails")
        const totalUser=await axios("http://localhost:3001/user")
        const data= users.data
        const totaluser=totalUser.data
        setEmails(data)
        setUser(totaluser)
    },[])
        
        
        const comprobation=(values)=>{
            if(emails.includes(values.email)){  
               let userBuy=[]
                for(let i=0;i<user.length;i++){
                    if(user[i].email===values.email){
                        userBuy.push(user[i])
                        
                        }
                    }
                    //NO TOCAR NADA DE ACA!!!
                    console.log(userBuy,"esto es el ususario que compra")
                    let datos=[...shoppingBag,...userBuy]
                    console.log(datos,"esto es order datosdatosdatos") 
                    setBuy(datos) 
                }
                else{
                return alert("logueese")
              }
    }
   
    const  redirectionRute=async()=>{
            //NO TOCAR EL BUY!!
            //console.log(buy," esto es buy dentro de redireccion para back")
            await axios.post("http://localhost:3001/order",buy)
             const resp= await  axios.post("http://localhost:3001/payment", shoppingBag)
             const point= resp.data.response.body.init_point
             window.location.replace(point)
            
        } 

return (
    <div>
        <Formik
        initialValues={{ email: '' }}
        validationSchema={Yup.object({
            email: Yup.string()
            .email('Invalid email address')
            .required('Email is required')
        })}
        onSubmit={(values, { setSubmitting }) => {
            comprobation(values)
            setSubmitting(false);
        }}
        >
        {({ isSubmitting }) => (
                
            <Form>
            <div className="mb-4 m-10">
                <label htmlFor="email">Email:</label>
                <div className="m-2">
                <Field type="email" name="email" className="border rounded-md p-2 w-15rem m-2" />

                </div>
            
                <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                disabled={isSubmitting}
                
            >
                Submit
            </button>
            <div className='m-10'>

            <Link to="/register">
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 m-5" > login </button>
            </Link>
            
            
            <button onClick={()=>redirectionRute()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 m-5">mercado Pago</button>
            
            <Link to="/shoppingBag">
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 m-5">Return to Carrito</button>
            </Link>

            </div>

            </Form>
        )}
        </Formik>
    </div>
    );
};

export default CheckoutForm;
