const Joi = require("joi");

const profileValidationSchema = Joi.object({
  fullName: Joi.string().required(),
  image: Joi.string(),
  address: Joi.object({
    lane: Joi.string().default("none"),
    city: Joi.string().default("none"),
    state: Joi.string().default("none"),
  }),
  bio: Joi.string().trim(),
  interests: Joi.array().items(Joi.string()),
  score: Joi.number().default(0),
  achievements: Joi.array().items(Joi.string()),
  socialLinks: Joi.object({
    facebook: Joi.string().trim(),
    twitter: Joi.string().trim(),
    linkedin: Joi.string().trim(),
  }),
  contact: Joi.object({
    email: Joi.string().email().trim(),
    phone: Joi.string().trim(),
  }),
});

const validateProfile = (profile) => {
  return profileValidationSchema.validate(profile);
};

module.exports = validateProfile;
