// import style from './shoppingBag.module.css'
import NavBar from '../NavBar/NavBar';
import React, { useContext, useState, useEffect } from 'react';
import { ShoppingBagContext } from '../../Contexts/ShoppingBagContext';
import { SelectedSizeContext } from '../../Contexts/SelectedSizeContext';
import { useAuth } from '../../Contexts/authContext';
import { AiOutlinePlus,AiOutlineLine } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const ShoppingBag = ({id, name, sellingPrice, images, average_rating, size, category,description,idUser,nameUser,lastNameUser}) => {

const {user}=useAuth();


    const [shoppingBag, setShoppingBag] = useContext(ShoppingBagContext)
    const [selectedSize, setSelectedSize] = useContext(SelectedSizeContext)






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
    /****************************Modo nocturno y claro */
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
        } else {
        setTheme("light");
        }
    }, []);

    useEffect(() => {
        if (theme === "dark") {
        document.documentElement.classList.add("dark");
        } else {
        document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleTHemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    /****************************Modo nocturno y claro */

    return (
        <div className="flex flex-col bg-slate-200 dark:bg-zinc-800">

    <div class="fixed top-0 z-50 w-full">
            {/* *****Nav***** */}
            <NavBar />
            <button className="absolute bottom-[1.8rem] left-[8rem] w-36 ml-4 mb-2">
            <label className="swap swap-rotate">
                <input type="checkbox" onClick={handleTHemeSwitch} />
                <svg
                className="swap-on fill-current w-6 h-6 fill-purple-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg
                className="swap-off fill-current w-6 h-6 fill-slate-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
            </label>
            </button>

        </div>
        <br />
        <br />
        <br />
        <br />
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

                        <li className="flex justify-between items-center border-b pb-4">
                            <div className="font-semibold ">{product.quantity}</div>
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
                    <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4 " >Checkout</button>
                    </Link>
                     </div>
                     </div>
                     <br />
                     <br />
                     <br />
                     <br />
                     <br />
                     <br />
                     <br />
                     <br />
                     <br />
                     <br />
                     <br />
                     <br />
                     <br />
                     <br />
                     <br />
                     <Footer/>
                     </div>
                   
    );
};

export default ShoppingBag;
