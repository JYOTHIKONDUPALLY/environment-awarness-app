const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const UserValidate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
  });

  return schema.validate(data);
};

module.exports = UserValidate;