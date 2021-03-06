import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import Checkout from "./pages/checkout/checkout.component"
import NotFound from "./components/404/404.component"
import ThankYouPage from "./pages/thank-you/thank-you.component"
import SignInAndSignUp from "./pages/registration/forms.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/users/users.actions";
import {createStructuredSelector} from "reselect"
import { selectCurrentUser } from "./redux/users/users.selectors";
import {selectCollectionsForPreview} from "./redux/collection/collection.selectors"
import {GlobalStyle} from "./global.styles"

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="">
        <GlobalStyle/>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUp />
              )
            }
          />
          <Route exact path="/checkout" component={Checkout}/>
          <Route exact path="/thankyou" component={ThankYouPage}/>
          <Route path="*" exact component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
