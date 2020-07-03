import React from "react";
import { connect } from "react-redux";

import { deleteItem, reduceQuantity, addItem } from "../../redux/cart/cart.actions";
import "./checkout-item.style.scss";

const CheckoutItem = ({ cartItem, deletedItem, addItem, reduceItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow"onClick={() => reduceItem(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => deletedItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  deletedItem: (item) => dispatch(deleteItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  reduceItem: (item)=> dispatch(reduceQuantity(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
