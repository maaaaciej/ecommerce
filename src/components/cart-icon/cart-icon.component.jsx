import { ReactComponent as Cart } from "./shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import React from "react";
import "./cart-icon.style.scss";

const CartIcon = ({toggleCartHidden}) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <Cart className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(CartIcon);
  