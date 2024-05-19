const Profile = require("../models/profile.model");
const validateProfile = require("../validation/profile.validate");

const createProfile = async (req, res) => {
  try {
    const { error } = validateProfile(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const profile = new Profile(req.body);
    await profile.save();
    res.status(201).json({ message: "Profile created successfully", profile });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { error } = validateProfile(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { id } = req.params;
    const profile = await Profile.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!profile) return res.status(404).json({ error: "Profile not found" });

    res.json({ message: "Profile updated successfully", profile });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await Profile.findByIdAndDelete(id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });

    res.json({ message: "Profile deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createProfile, updateProfile, deleteProfile };
