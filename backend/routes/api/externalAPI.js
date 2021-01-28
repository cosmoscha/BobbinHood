const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { Asset, Financial } = require("../../db/models");
const { requireAuth } = require("../../utils/auth");
const { apiKeys } = require("../../config");
const { finnhubKey } = apiKeys;
const fetch = require("node-fetch");
router.get(
  "/externalApi",
  requireAuth,
  asyncHandler(async (req, res) => {
    const assets = await Asset.findAll();

    return res.json({ assets: assets });
  })
);
