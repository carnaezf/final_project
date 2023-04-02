
// No comments
import React, { createContext, useState } from "react";

export const ShoppingBagContext = createContext(null);

export const ShoppingBagProvider = ({ children }) => {
  const [shoppingBag, setShoppingBag] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);



  console.log('Estado de shoppingBag en el contexto:', shoppingBag);
  console.log('Estado de selectedSize en el contexto:', selectedSize);

  const addProduct = (product, size) => {
    setShoppingBag([...shoppingBag, { product, size }]);
  };

  return (
    <ShoppingBagContext.Provider value={[shoppingBag, setShoppingBag]}>
      {children}
    </ShoppingBagContext.Provider>
  );
};

