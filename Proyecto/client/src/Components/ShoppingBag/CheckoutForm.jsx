
import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import {SelectedOrderContext} from "../../Contexts/CreateContext"
import { ShoppingBagContext } from '../../Contexts/ShoppingBagContext';
//import {AuthProvider} from("../../Contexts/authContext")

const CheckoutForm = () => {

  
  const [emails, setEmails] = useState({});
  const [user, setUser] = useState({});
  const [shoppingBag, setShoppingBag] = useContext(ShoppingBagContext)

  const [mercadoPagoEnabled, setMercadoPagoEnabled] = useState(false)
  const [loginEnabled, setLoginEnabled] = useState(false)
  const [createOrderPay, setcreateOrderPay] =  useContext(SelectedOrderContext);
  
    useEffect(async() => {
        const users= await axios("/user/totalMail/m")
        const totalUser=await axios("/user")
        const data= users.data
        const totaluser=totalUser.data

       setEmails(data)
        setUser(totaluser)
    },[])
        
        const comprobation=(values)=>{
          try {
          console.log(values.email);
            console.log(emails, " Estos es BBDD");

            if(emails.includes(values.email)){ 
              console.log(emails, " Estos es emails  BBDD dentro del if");
 
               let userBuy=[]
                for(let i=0;i<user.length;i++){
                    if(user[i].email===values.email){
                        userBuy.push(user[i])
                        
                        }
                    }
                    //NO TOCAR NADA DE ACA!!!
                    let datos=[...shoppingBag,...userBuy]
                  
                    setMercadoPagoEnabled(true)
                    setLoginEnabled(false)

                    setcreateOrderPay(datos)
                   // console.log(createOrderPay," esto es buy dentro de createOrderPay createOrderPay back")
                   return alert("hola")
                }
                else{
                    setMercadoPagoEnabled(false)
                    setLoginEnabled(true)
                return alert("¡You must login!")
              }
            } catch (error) {
            return ({error:error.message})
            }
    }
   
 
    const  redirectionRute=async()=>{
            //NO TOCAR EL BUY!!

            console.log(createOrderPay,"createOrderPaycreateOrderPaycreateOrderPay")
            //localStorage.setItem('estado', JSON.stringify(createOrderPay))
             //const resp= await  axios.post("http://localhost:3001/payment", shoppingBag)
             //console.log(resp, "responseeeeee")

            //console.log(buy," esto es buy dentro de redireccion para back")
            await axios.post("/order",buy)
             const resp= await  axios.post("/payment", shoppingBag)

             const point= resp.data.response.body.init_point
             window.location.replace(point)
           //  window.open(point,"mercado Pago",undefined)
            
        } 


  return (
    <div className='flex flex-col bg-slate-200 dark:bg-zinc-800 h-screen'>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          comprobation(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4 m-10 dark:text-slate-200">
              <label htmlFor="email">Email:</label>
              <div className="m-2">
                <Field
                  type="email"
                  name="email"
                  className="w-[18rem] bg-gray-200 text-black border border-purple-600 hover:border-purple-800 rounded py-2 px-4 mb-2 dark:bg-zinc-600 dark:text-slate-200"
                />
              </div>

              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <button
              type="submit"
              className=" m-2 w-[5rem] transition font-roboto font-normal normal-case text-lg bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded  rounded "
              disabled={isSubmitting}
            >
              Verify
            </button>
            <div className="m-10">

              <Link to="/register">
                <button
                  id="BotonLogin"
                  disabled={loginEnabled}
                  className={`m-2  w-[5rem] transition font-roboto font-normal normal-case text-lg bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4 rounded ${
                    loginEnabled ? "" : "opacity-50 cursor-not-allowed"
                  }`}
                >

                
                  Login
                </button>
              </Link>



                    
            <button id="BotonMercado" disabled={console.log(mercadoPagoEnabled)} onClick={()=>redirectionRute()} className={` m-2 w-[8rem] transition font-roboto font-normal normal-case text-lg bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded  rounded ${
    mercadoPagoEnabled ? "" : "opacity-50 cursor-not-allowed"
  }`}>Mercado Pago</button>
            


              <Link to="/shoppingBag">

                <button className=" m-2 w-[10rem] transition font-roboto font-normal normal-case text-lg bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded  rounded">

                  Shopping Bag
                </button>
              </Link>

                
              <Link to="/createProductOrder">

                <button className="m-2 w-[10rem] transition font-roboto font-normal normal-case text-lg bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded  rounded">
                Check Payment

                </button>
              </Link>

            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CheckoutForm;