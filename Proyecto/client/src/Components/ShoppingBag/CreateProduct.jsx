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
    <div>

<h1>Su orden ah sido abonada con exito (en ingles)</h1>
<Link to="/home">
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 m-5">HOME</button>
</Link>
    </div>
)



}


export default CreateProductOrder;