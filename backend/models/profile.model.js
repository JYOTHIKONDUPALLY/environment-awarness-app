const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    image: { type: String },
    address: {
      lane: { type: String, default: none },
      city: { type: String, default: "none" },
      state: { type: String, default: "none" },
    },
    bio: { type: String, trim: true },
    interests: { type: [String], default: [] },
    score: { type: Number, default: 0 },
    achievements: { type: [String], default: [] },
    socialLinks: {
      facebook: { type: String, trim: true },
      twitter: { type: String, trim: true },
      linkedin: { type: String, trim: true },
    },
    contact: {
      email: { type: String, trim: true },
      phone: { type: String, trim: true },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", profileSchema);
