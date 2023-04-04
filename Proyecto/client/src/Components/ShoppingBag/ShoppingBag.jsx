// import style from './shoppingBag.module.css'
import NavBar from '../NavBar/NavBar';
import React, { useContext, useState } from 'react';
import { ShoppingBagContext } from '../../Contexts/ShoppingBagContext';
import { SelectedSizeContext } from '../../Contexts/SelectedSizeContext';
import { useAuth } from '../../Contexts/authContext';
import { AiOutlinePlus,AiOutlineLine } from "react-icons/ai";
import { Link } from 'react-router-dom';


const ShoppingBag = ({id, name, sellingPrice, images, average_rating, size, category,description,idUser,nameUser,lastNameUser}) => {

const {user}=useAuth();


    const [shoppingBag, setShoppingBag] = useContext(ShoppingBagContext)
    const [selectedSize, setSelectedSize] = useContext(SelectedSizeContext)

    console.log('Estado shoppingBag desde ShoppingBag', shoppingBag);
    console.log('Estado selectedSize desde ShoppingBag', selectedSize);




    const quantity = shoppingBag.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    let totalPrice=0;
    for(let i=0; i<shoppingBag.length;i++){
     totalPrice=Number(totalPrice)+  (Number(shoppingBag[i].quantity) * Number(shoppingBag[i].unit_price))
        }

    

    const addToCart = (id) => {
        setShoppingBag((currItems) => {

            const isItemsFound = currItems.find((item) => item.id === id);
            if (isItemsFound) {
                return currItems.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1, size: selectedSize };
                } else {
                    return item;
                }
                });
            } else {
                    return [
                        ...currItems, 
                        {   
                        id,
                        title:name, 
                        quantity: 1, 
                        unit_price:sellingPrice, 
                        description:"description ", 
                        picture_url:images[0],
                        currency_id:'ARS',
                        size: selectedSize, 
                    }
                ];
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
                        <img src={product.picture_url} className="w-[5rem] h-[5rem]" alt='imge'/>
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
                    <Link to="/checkoutform">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 " >Checkout</button>
                    </Link>
                     </div>
                     </div>
                     </div>
                   
    );
};

export default ShoppingBag;
