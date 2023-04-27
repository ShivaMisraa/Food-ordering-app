import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";
import React, { useContext } from "react";

const MealItemForm = (props) => {
  const cartcntx = useContext(CartContext);

  const addItemToCart = (event) => {
    event.preventDefault();
    //update the cartcntx.items
    // cartcntx.items.push(props.item)

    // 
    
    const quantity=(document.getElementById("amount_" + props.id ).value)
    cartcntx.addItem({ ...props.item, quantity: quantity });

    console.log(cartcntx);
  };
  return (
    <form className={classes.form}>
      {console.log(cartcntx)}
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
