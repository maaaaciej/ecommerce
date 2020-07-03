import React from "react";
import { connect } from "react-redux";
import "./shopping-cart.style.scss";
import CustomButton from "../custom-button/custom-button.components";

import CartItem from "../cart-item/cart-item.component";

const Cart = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default connect(mapStateToProps)(Cart);
