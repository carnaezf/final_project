import style from './shoppingBag.module.css'
import NavBar from '../NavBar/NavBar';
import React, { useContext, useState } from 'react';
import { ShoppingBagContext } from '../../Contexts/ShoppingBagContext';


const ShoppingBag = () => {
    const [shoppingBag, setShoppingBag] = useContext(ShoppingBagContext)
   console.log('ESTADO SHOPPING BAGS DESDE CART COMP', shoppingBag)

    const quantity = shoppingBag.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    const totalPrice = shoppingBag.reduce(
        (acc, curr) => acc + curr.quantity * curr.price,
        0
    );

    return (
        <div>

            <div>
                <NavBar />
            </div>
            <div>
            <div>Items in cart: {quantity}</div>
            <div>Total: ${totalPrice}</div>
                <button onClick={() => console.log(shoppingBag)}>Checkout</button>
          </div>
          </div>
    )

}



export default ShoppingBag;



