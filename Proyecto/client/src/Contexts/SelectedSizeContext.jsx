import { createContext, useState } from "react";

export const SelectedSizeContext = createContext(null);

export const SelectedSizeSizeProvider = ({ children }) => {
    const [selectedSize, setSelectedSize] = useState("");

    return (
        <SelectedSizeContext.Provider value={ [selectedSize, setSelectedSize] }>
            {children}
        </SelectedSizeContext.Provider>
    );
};

// test



