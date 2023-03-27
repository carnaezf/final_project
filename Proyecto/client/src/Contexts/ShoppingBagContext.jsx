
import React, { createContext, useState } from "react";




export const ShoppingBagContext = createContext(null);

export const ShoppingBagProvider = ({ children }) => {
  const [shoppingBag, setShoppingBag] = useState([]);

  return (
    <ShoppingBagContext.Provider value={[shoppingBag, setShoppingBag]}>
      {children}
    </ShoppingBagContext.Provider>
  );
};

