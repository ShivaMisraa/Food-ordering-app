import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import React, { useContext } from "react";
import CartContext from "../../store/cart-context";


const Cart = (props) => {

  const cartcntx= useContext(CartContext);


  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartcntx.items.map((item) => (
        <li className={classes.orderedFood}>
          Meal: {item.name} Price: ${item.price} Quantity:{item.quantity}
        <button className={classes.dltbtn} onClick={()=>cartcntx.removeItem(item.id)}>Delete</button>
        </li>        
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$ 32.15</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}> Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
