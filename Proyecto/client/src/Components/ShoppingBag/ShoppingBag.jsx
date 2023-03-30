// import style from './shoppingBag.module.css'
import NavBar from '../NavBar/NavBar';
import React, { useContext } from 'react';
import { ShoppingBagContext } from '../../Contexts/ShoppingBagContext';
import axios from "axios"

import { useAuth } from '../../Contexts/authContext';


const ShoppingBag = () => {
    const {user}=useAuth();


    const [shoppingBag, setShoppingBag] = useContext(ShoppingBagContext)
  // console.log('ESTADO SHOPPING BAGS DESDE CART COMP', shoppingBag)

    const quantity = shoppingBag.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

   //console.log(shoppingBag)
    // const totalPrice = shoppingBag.reduce(
    //     (acc, curr) => acc + curr.quantity * curr.price,
    //     0
    // );
    
    let totalPrice=0;
   // console.log(shoppingBag.length)
    for(let i=0; i<shoppingBag.length;i++){
     totalPrice=Number(totalPrice)+  (Number(shoppingBag[i].quantity) * Number(shoppingBag[i].unit_price))
      }
 
    const  redirectionRute=async()=>{
        
        const resp= await  axios.post("http://localhost:3001/payment", shoppingBag)
        // {id: 0,title: "camisa", picture_url: "noImage",quantity: 1,price:20, description: "camisa larga"}
        const point= resp.data.response.body.init_point
        //  console.log(point)
        window.location.replace(point)
        
       //.then(res=>console.log(res))
       // console.log(response)
  
    } 
    return (
        <div className="bg-gray-100 min-h-screen">
            {user && <h1 className="text-lg font-semibold mb-4">Hi!! {user.displayName? user.displayName : user.email}</h1>}

            
            <NavBar />
            <div className="container mx-auto py-8">
                <div className="bg-white p-4 shadow-md rounded-md flex-col">
                    <div className="text-lg font-semibold mb-4">Shopping Bag</div>
                    
                    <div className="flex justify-between items-center border-b pb-4">
                        <div className="font-semibold">Items in cart:</div>
                        <div>{quantity}</div>
                    </div>
                  
                  {  shoppingBag.map(({picture_url,title,unit_price})=>
                    <div className="flex justify-between items-center border-b py-4 mt-4">
                        <div className="flex justify-between items-center border-b pb-4">
                        <div className="font-semibold">Products:</div>
                        <div > { title } </div>
                        </div>
                        <div className="flex justify-between items-center border-b pb-4">
                        <div className="font-semibold"  > </div>
                        <div>{unit_price}</div>
                        </div>     
                    </div>
                        )}
                    <div className="flex justify-between items-center border-b py-4 mt-4">
                        <div className="font-semibold">Total:</div>
                        <div>{totalPrice}</div>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => redirectionRute()}>Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingBag;