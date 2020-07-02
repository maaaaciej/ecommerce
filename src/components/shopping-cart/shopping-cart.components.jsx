import React from 'react'
import "./shopping-cart.style.scss"
import CustomButton from "../custom-button/custom-button.components"

const Cart = () => {
    return ( <div className="cart-dropdown">
        <div className="cart-items"/>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div> );
}
 
export default Cart;