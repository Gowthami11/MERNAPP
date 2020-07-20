const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");
const authRoutes = require("./routes/authRoutes");
const passport = require("passport");

mongoose.connect(keys.mongoURI);
const app = express();
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //TIME COOKIE SHPULD LIVE IN MILLISECONDS
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());
authRoutes(app);
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV === "production") {
  //Express will serve up production assests
  //like our main.js or main.css file

  app.use(express.static("client/build"));
  //Express will serve up index.html assests
  //if it doesnt recognize the route

  app.use("*", (req, res) => {
    res.sendDate(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT);
