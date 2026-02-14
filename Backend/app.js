const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const postRoutes = require("./routes/post.routes");
const commentRoutes = require("./routes/comment.routes");
const adminRoutes = require("./routes/admin.routes");

const app = express();

// ⚡ CORS configuration for deployed frontend
const corsOptions = {
  origin: "https://frontend-mern-hazel-eight.vercel.app", // 👈 frontend deploy URL
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// ✅ test route
app.get("/", (req, res) => {
  res.send("Backend API running");
});

// routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/admin", adminRoutes);

module.exports = app;
