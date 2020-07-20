import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions";
function Payments() {
  //debugger;
  const dispatch = useDispatch();
  return (
    <div>
      {/* token is received from stripe after money is sent */}
      <StripeCheckout
        name="Emaily"
        description="5 Emaily credits for 5 emails"
        amount={500}
        token={(token) => dispatch(actions.handleToken(token))}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add credits</button>
      </StripeCheckout>
    </div>
  );
}

export default Payments;
