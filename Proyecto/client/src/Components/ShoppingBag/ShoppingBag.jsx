// import style from './shoppingBag.module.css'
import NavBar from '../NavBar/NavBar';
import React, { useContext } from 'react';
import { ShoppingBagContext } from '../../Contexts/ShoppingBagContext';
import axios from "axios"
import { AiOutlinePlus,AiOutlineLine } from "react-icons/ai";

const ShoppingBag = ({id, name, sellingPrice, images, average_rating, category,description}) => {
    const [shoppingBag, setShoppingBag] = useContext(ShoppingBagContext)
  // console.log('ESTADO SHOPPING BAGS DESDE carrito', shoppingBag)
   //console.log(shoppingBag[0].id,"esto es id")

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


    const addToCart = (id) => {
        setShoppingBag((currItems) => {

            //console.log("click")
            //console.log(currItems, "esto curr items")
            const isItemsFound = currItems.find((item) => item.id === id);
            if (isItemsFound) {
                return currItems.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                } else {
                    return item;
                }
                });
            } else {
                    return [...currItems, { id,title:name, quantity: 1, unit_price:sellingPrice, description:"description ", picture_url:images[0],currency_id:'ARS' }];
            }
        });
    }

    const removeItem = (id) => {
        setShoppingBag((currItems) => {
            if (currItems.find((item) => item.id === id)?.quantity === 1) {
                return currItems.filter((item) => item.id !== id);
            } else {
                return currItems.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
            });
        };

    const getQuantityById = (id) => {
        return shoppingBag.find((item) => item.id === id)?.quantity || 0;
    };    

    const quantityPerItem = getQuantityById(id);



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
                        <div className="font-semibold "> </div>
                        <div > { product.title } </div>
                        </li>  

                        <li className="flex justify-center items-center border-b pb-4 ">
                        <div className="font-semibold  justify-center items-center"  > </div>
                        <div  className=" items-center  " >{product.unit_price}</div>
                        </li> 

                        <li className="flex justify-between items-center border-b pb-4">
                        <div className="font-semibold "  > </div>
                        <img src={product.picture_url} className="w-[5rem] h-[5rem]"/>
                        </li>  
                        <h4 className="ml-4 badge p-0 font-light text-[8pt] mt-[px]  text-white bg-slate-600">   
                          <div>
                          <button className=" badge border-none px-[2px]  font-light hover:bg-purple-800" onClick={() => addToCart(product.id)}><AiOutlinePlus/></button>
                          <button className="badge border-none px-[2px] hover:bg-purple-800  ml-4 font-light"onClick={() => removeItem(product.id)}><AiOutlineLine/></button> 
                         </div>              
                        </h4>
                  </ul>
                        )}
                    <div className="flex justify-between items-center border-b py-4 mt-4 "> 
                        <div className="font-semibold ">Total:</div>
                        <div>{totalPrice}</div>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => redirectionRute()}>Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingBag;