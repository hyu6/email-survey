import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Email Survey"
        description="$5 for 5 credits"
        amount={500}
        token={(token) => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn light-blue darken-1">Add credits</button>
      </StripeCheckout>
    );
  }
}

export default Payments;
