import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { ShoppingBagContext } from "../../Contexts/ShoppingBagContext";

import {SelectedOrderContext} from "../../Contexts/CreateContext"
import { Link } from 'react-router-dom';


const CreateProductOrder =()=>{
    const [shoppingBag, setShoppingBag] = useContext(ShoppingBagContext);
    const [createOrderPay, setcreateOrderPay] =  useContext(SelectedOrderContext);
     

    useEffect(async() => {
        const estadoAlmacenado = localStorage.getItem('estado');
        const estadoActual = estadoAlmacenado ? JSON.parse(estadoAlmacenado) : null
        
            console.log(estadoActual,"estadoActual para crear la order")
        await axios.post("http://localhost:3001/order",estadoActual)
    
    },[])



    
return (
    <div className='flex flex-col bg-slate-200 dark:bg-zinc-800 h-screen'>
        <div className='mx-auto my-[15rem] bg-slate-100 dark:bg-zinc-700 py-6 px-8 rounded drop-shadow-md'>
            <br />
            <div class="text-2xl font-extrabold ...">
                        <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                        Your order has been successfully paid
                        </span>
                    </div>
            <Link to="/home">
            <button className="mt-8 m-2 w-[10rem] transition font-roboto font-normal normal-case text-lg bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded  rounded">Home</button>
            </Link>
        </div>
    </div>
)



}


export default CreateProductOrder;