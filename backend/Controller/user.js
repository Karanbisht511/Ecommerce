const bcrypt = require("bcrypt");
const { generateToken } = require("../Utils/JWTFunctions");
const User = require("../Model/user");
const { areValidCredentials } = require("../Utils/validateCredentials");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
   
    const result = await User.findOne({ username });

    if (!result) {
      res.status(400).json({ message: "Invalid User Credentials!" });
    } else if (result) {
      console.log(result);
      const { _id } = result;
      const userPayload = { userId: _id };
      const { passwordHash } = result;
      bcrypt.compare(password, passwordHash, function (err, isEqual) {
        if (err) {
          console.log("error:" + err);
        }
        if (isEqual) {
          const token = generateToken(userPayload);
          delete result["passwordHash"];
          res.status(200).json({
            success: true,
            isUserAuthenticated: true,
            username,
            token,
            userInfo: {
              username: result?.username,
              mobile: result?.mobile,
              email: result?.email,
            },
          });
        } else {
          res.status(400).json({
            success: true,
            isUserAuthenticated: false,
            message: "Invalid User Credentials!",
          });
        }
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      isUserAuthenticated: false,
      message: "Sorry unable to connect to system!",
    });
  }
};

exports.signup = async (req, res) => {
  try {
    console.log(req.body);
    const { username, password, email, mobile } = req.body;

    const saltRounds = 10;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("Existing user");
      res.status(400).json({ message: "Email already in use" });
    } else {
      bcrypt.hash(password, saltRounds, function (err, passwordHash) {
        if (err) {
          console.log("error:" + err);
        }
        const newUser = new User({ username, passwordHash, email, mobile });
        newUser.save();
        res.status(200).send("Signup Successfull");
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Some issue occured" + error.message);
  }
};

exports.logout = async (req, res) => {
  try {
    res.status(200).json({ message: "logout successfully" });
  } catch (error) {
    res.status(400).json({ message: `${error.message}` });
  }
};
