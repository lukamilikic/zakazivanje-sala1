const { expressjwt } = require("express-jwt");

let auth = expressjwt({
  secret: "SECRET",
  userProperty: "body.userData",
  algorithms: ["HS256"],
});

module.exports = { auth };
