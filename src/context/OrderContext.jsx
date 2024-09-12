import { createContext, useContext, useState } from "react";

export const OrderProvider = ({children}) => {
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "cash",
  });

  const updateOrderDetails = (field, value) => {
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const clearOrderDetails = () => {
    setOrderDetails({
      name: "",
      phone: "",
      address: "",
      payment: "cash",
    });
  };

  return <OrderContext.Provider
    value={{orderDetails, updateOrderDetails, clearOrderDetails}}>
    {children}
  </OrderContext.Provider>
}


const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);