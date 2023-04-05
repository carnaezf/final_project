import React, { createContext, useState } from "react";

export const SelectedOrderContext = createContext(null);

export const CreateOrderPayContextProvider = ({ children }) => {
    const [createOrderPay, setcreateOrderPay] = useState({});

    return (
        <SelectedOrderContext.Provider value={ [createOrderPay, setcreateOrderPay] }>
            {children}
        </SelectedOrderContext.Provider>
    );
};



