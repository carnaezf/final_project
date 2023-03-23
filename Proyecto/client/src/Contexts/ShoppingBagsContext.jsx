import React, { createContext, useState } from 'react';

export const ShoppingBagContex = createContext() 

export const ShoppingBagProvider = ({children}) => {

    const [shoppingBag, setShoppingBag] = useState([])

    return (
        <ShoppingBagContex.Provider
            value={[shoppingBag, setShoppingBag]}>
            {children}
        </ShoppingBagContex.Provider>
    )
};