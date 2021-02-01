const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const assetsRouter = require("./assets.js");
const assetRouter = require("./asset.js");
const portfolioRouter = require("./portfolio.js");
const express = require("express");
const router = express.Router();
const apiRouter = require("./api");

router.post("/test", function (req, res) {
  res.json({ requestBody: req.body });
});

router.use("/api", apiRouter);

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/assets", assetsRouter);

router.use("/asset", assetRouter);

router.use("/portfolio", portfolioRouter);

if (process.env.NODE_ENV === "production") {
  const path = require("path");
  // Serve the frontend's index.html file at the root route
  router.get("/", (req, res) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, "../../frontend", "build", "index.html")
    );
  });

  // Serve the static assets in the frontend's build folder
  router.use(express.static(path.resolve("../frontend/build")));

  // Serve the frontend's index.html file at all other routes NOT starting with /api
  router.get(/^(?!\/?api).*/, (req, res) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, "../../frontend", "build", "index.html")
    );
  });
}

// Add a XSRF-TOKEN cookie in development
if (process.env.NODE_ENV !== "production") {
  router.get("/api/csrf/restore", (req, res) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    res.status(201).json({});
  });
}

module.exports = router;
