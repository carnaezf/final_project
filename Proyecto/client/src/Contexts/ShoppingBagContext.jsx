
// No comments
import React, { createContext, useState } from "react";




export const ShoppingBagContext = createContext(null);

export const ShoppingBagProvider = ({ children }) => {
  const [shoppingBag, setShoppingBag] = useState([]);
  //console.log('Estado de shoppingBag en el contexto:', shoppingBag);

  return (
    <ShoppingBagContext.Provider value={[shoppingBag, setShoppingBag]}>
      {children}
    </ShoppingBagContext.Provider>
  );
};

