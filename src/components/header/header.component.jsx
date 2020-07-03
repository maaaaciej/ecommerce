import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import {createStructuredSelector} from "reselect"
import { ReactComponent as Logo } from "./sweater.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import Cart from "../shopping-cart/shopping-cart.components";
import {selectCartHidden} from "../../redux/cart/cart.selectors"
import {selectCurrentUser} from "../../redux/users/users.selectors"
const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <Cart />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);

