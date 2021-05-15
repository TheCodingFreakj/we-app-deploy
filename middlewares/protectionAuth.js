const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const bearerHeader = req.headers["authorization"];
  console.log(bearerHeader);
  const bearer = bearerHeader.split(" ");
  const token = bearer[1];
  req.authenticated = false;
  try {
    if (bearerHeader) {
      jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        if (err) {
          console.log(err);
          req.authenticated = false;
          req.decoded = null;
          next();
        } else {
          console.log("33333");
          req.decoded = decoded;
          req.authenticated = true;
          next();
        }
      });
    }
    next();
  } catch (err) {
    console.error("something wrong with  middleware");
    res.status(500).json({ msg: "Server Error" });
  }
};
