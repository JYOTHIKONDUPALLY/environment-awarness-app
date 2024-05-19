const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const authValidate = require("../validation/auth.validation");
const login = async (req, res) => {
  try {
    const { error } = authValidate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.UserfindOne({ email: req.body.email });
    if (!user)
      return res.status(401).send({ message: "Invalid Email or Password" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword)
      return res.status(401).send({ message: "Invalid Email or Password" });
    const token = User.genrateAuthToken();

    res.status(200).send({ data: token, message: "Logged in Successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = { login };
