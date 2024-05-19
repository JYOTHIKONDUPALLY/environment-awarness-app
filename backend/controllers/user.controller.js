const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const UserValidate = require("../validation/user.validate");
const register = async (req, res) => {
  try {
    const { error } = UserValidate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const user = await User.findOne({ email: req.body.email });

    if (user) {
      return res
        .status(409)
        .send({ message: "User with given email already exist" });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));

    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = await User.create({ ...req.body, password: hashPassword });

    res.send(201).json(newUser).send({ message: "User created Successfully" });
  } catch (error) {
    res.send(500).send({ message: "Internal server error" });
  }
};

module.exports = register;
