const passport = require("passport");
module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));
  app.get("/api/current_user", (req, res) => res.send(req.user));
  app.get("/auth/logout", (req, res) => {
    req.logout(); //removes all session data
    res.send(req.user); //now re.user no longer exists
  });
};
