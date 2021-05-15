const User = require("../models/user");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.Signup = async (req, res, next) => {
  console.log(req.body);
  const { username, name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        errors: [{ msg: "User already exists in our database..Please Login " }],
      });
    }
    user = new User({
      username,
      name,
      email,
      password,
    });
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id, //this is the user we just saved
      },
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({
          token,
          message: "Sign Up Done.. Please Sign In And Shop ",
          id: user._id,
        });
        //we should take this send it in header and access protected routes
        //create middleware for this
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.Signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    //no user
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    //if user exists check the password
    const isMatch = await bcrypt.compare(password, user.password);
    //no password
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    const payload = {
      user: {
        id: user._id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "5 days" },
      (err, token) => {
        if (err) throw err;
        res.json({
          token,
          message: "You are logged in ",
          user,
        });
      }
    );

    res.cookie("tokenforfrontend", token, { expiresIn: "1d" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.accessAuthenticated = async (req, res, next) => {
  try {
    res.send(req.authenticated ? req.authenticated : false);
    //https://stackoverflow.com/questions/38533409/node-js-callback-for-jwt-verify
    //return res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
exports.Signout = async (req, res, next) => {
  try {
    res.clearCookie("token");

    res.json({
      message: "Sign Out Success",
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
