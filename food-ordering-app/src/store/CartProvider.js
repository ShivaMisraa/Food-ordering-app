import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (item) => {

    updateItems([...items,item]);
    console.log({ item });
  };

  const removeItemFromCartHandler = (id) => {
    updateItems(prevItems=>{
        const itemIndex= prevItems.findIndex(item=> item.id===id);
        const updatedItems= [...prevItems];
        updatedItems.splice(itemIndex, 1);
        return updatedItems
    })
  };

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
