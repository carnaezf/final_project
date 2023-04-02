import { createContext, useState } from "react";

export const ProductSizeContext = createContext(null);

export const ProductSizeProvider = ({ children }) => {
    const [selectedSize, setSelectedSize] = useState("");

    return (
        <ProductSizeContext.Provider value={{ selectedSize, setSelectedSize }}>
            {children}
        </ProductSizeContext.Provider>
    );
};



