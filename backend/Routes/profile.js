const router = require("express").Router();
const profileController = require("../controllers/profile.controller");

router.get("/", (req, res) => {
  res.json({ message: "hello" });
});
router.post("/profile", profileController.createProfile);

router.put("/profile/:id", profileController.updateProfile);

router.delete("/profile/:id", profileController.deleteProfile);
module.exports = router;
