const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");
const { assetPortfolio, Portfolio, Asset } = require("../../db/models");
const asset = require("../../db/models/asset");

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const userId = await parseInt(req.params.id, 10);
    const portfolio = await Portfolio.findOne({
      where: { userId: userId },
      include: [
        {
          model: Asset,
          through: { attributes: ["assetId", "portfolioId"] },
        },
      ],
    });
    return res.json(portfolio);
  })
);

router.post(
  "/delete/:assetId",
  asyncHandler(async (req, res) => {
    // const userId = await parseInt(req.session.auth.userId);
    const assetId = parseInt(req.params.assetId, 10);
    const assetPortfolio = await assetPortfolio.findOne({
      where: { assetId: assetId },
    });
    await assetPortfolio.destroy();
    res.redirect("/portfolio");
  })
);

router.post(
  "/:assetToBeAddedId",
  asyncHandler(async (req, res) => {
    console.log("post an asset");
    const portfolioId = 4;
    const assetId = parseInt(req.params.assetId, 10);
    await assetPortfolio.create({
      assetId,
      portfolioId,
    });
    console.log("you have created the asset");
    res.redirect("/portfolio");
  })
);

module.exports = router;
