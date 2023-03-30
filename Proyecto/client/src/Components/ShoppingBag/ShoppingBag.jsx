// import style from './shoppingBag.module.css'
import NavBar from '../NavBar/NavBar';
import React, { useContext } from 'react';
import { ShoppingBagContext } from '../../Contexts/ShoppingBagContext';
import axios from "axios"


const ShoppingBag = () => {
    const [shoppingBag, setShoppingBag] = useContext(ShoppingBagContext)
  // console.log('ESTADO SHOPPING BAGS DESDE CART COMP', shoppingBag)

    const quantity = shoppingBag.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    let totalPrice=0;
    for(let i=0; i<shoppingBag.length;i++){
     totalPrice=Number(totalPrice)+  (Number(shoppingBag[i].quantity) * Number(shoppingBag[i].unit_price))
      }
 
    const  redirectionRute=async()=>{ 
        const resp= await  axios.post("http://localhost:3001/payment", shoppingBag)
        const point= resp.data.response.body.init_point
        window.location.replace(point)
    } 



    return (
        <div className="bg-gray-100 min-h-screen">
            <NavBar />
            <div className="container mx-auto py-8">
                <div className="bg-white p-4 shadow-md rounded-md flex-col">
                    <div className="text-lg font-semibold mb-4">Shopping Bag</div>
                    
                    <div className="flex justify-between items-center border-b pb-4">
                        <div className="font-semibold">Items in cart:</div>
                        <div>{quantity}</div>
                    </div>
                  
                  {  shoppingBag.map((product)=>
                  <ul className="flex justify-between items-center border-b py-4 mt-4">
                         <li className="flex justify-between items-center border-b pb-4">
                        <div className="font-semibold"> </div>
                        <div > { product.title } </div>
                        </li>  

                        <li className="flex justify-center items-center border-b pb-4">
                        <div className="font-semibold  justify-center items-center"  > </div>
                        <div  className=" items-center  " >{product.unit_price}</div>
                        </li> 

                        <li className="flex justify-between items-center border-b pb-4">
                        <div className="font-semibold"  > </div>
                        <img src={product.picture_url} className="w-[5rem] h-[5rem]"/>
                        </li>  
                        
                  </ul>
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