import style from './shoppingBag.module.css'
import React from 'react';
import NavBar from '../NavBar/NavBar';




// shoppinBags_actions: addToCart, deleteCart, removeFromCart, updateFromCart
// checkout_actions: CreateOrder, UpdateOrderToCreateStatus 
// order_actions: deleteOrder, getOrders
// Consultar por modularización Redux.

const ShoppingBag = () => {
    return (
            <div>
                <NavBar />
            </div>
    )

}

export default ShoppingBag;




