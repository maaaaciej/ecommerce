import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Redirect } from "react-router-dom";

class StripeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }

  render() {
    const { price } = this.props;
    const cents = price * 100;
    const onToken = (token) => {
      console.log(token);
      this.setState({ redirect: true });
    };
    const apiKey =
      "pk_test_51H1B19I0nBueFgLi2p4nQXK0088w0gBDUfZAKkMQL0DLX5SrLX9uIs2qjVTgKlJnSXbGkhK8s6dhBP69d4c1xgCX00zR93xsPZ";
    return this.state.redirect ? (
      <Redirect to="/thankyou" />
    ) : (
      <StripeCheckout
        label="Pay Now"
        name="Ostrowski Ecommerce"
        billingAddress
        shippingAddress
        image="https://scontent.fosl4-1.fna.fbcdn.net/v/t1.0-9/27857807_10211209501901150_2479877136610153358_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_oc=AQlgCxjgmfzumf68MO1add--T0ASnAKn0dJdG22yPGlKQR399ldplXJCcYnReSB3m2E&_nc_ht=scontent.fosl4-1.fna&oh=711d96481ce2a567e4b041f2bd2e7b3f&oe=5F265C3C"
        description={`Your total is $${price}`}
        amount={cents}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={apiKey}
      />
    );
  }
}

export default StripeButton;
