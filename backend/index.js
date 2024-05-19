require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./Routes/users");
const authRoutes = require("./Routes/auth");
const profileRoutes = require("./Routes/profile");
connection();
app.use(express.json());
app.use(cors());
app.use("/api", profileRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Listening on port ${port}`));
