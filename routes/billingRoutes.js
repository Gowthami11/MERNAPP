const keys = require("../config/keys");
const requireLogin = require("../middlewares/requireLogin");
const stripe = require("stripe")(keys.stripeSecretKey);
module.exports = (app) => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    console.log("req.body", req.body);
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "inr",
      description: "$5 for 5 credits",
      source: req.body.id,
    });
    //console.log("carge", charge);
    req.user.credits += 5; // add credits
    const user = await req.user.save(); // save to db
    res.send(user);
  });
};
