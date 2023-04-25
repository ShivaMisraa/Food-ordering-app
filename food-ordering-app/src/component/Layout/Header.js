import React, { Fragment } from "react";
import mealsImage from "../../assets/Meals.png";
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A photo including smart phone, packet of food and some spoons!" />
      </div>
    </Fragment>
  );
};
export default Header;
