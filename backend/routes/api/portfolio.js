const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");
const { assetPortfolio, Portfolio, Asset } = require("../../db/models");

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const userId = await parseInt(req.params.id, 10);
    // const userId = req.body.userId;
    console.log("userId", userId);
    const portfolio = await db.Portfolio.findOne({
      where: {
        userId: userId,
      },
      include: [
        {
          model: db.Asset,
        },
      ],
      // raw: true,
      // nest: true,
    });
    // const portfolioAssets = await db.Asset.findAll({});
    console.log("portfolio response", portfolio);
    return res.json({ portfolio });
  })
);

router.post(
  "/create",
  asyncHandler(async (req, res) => {
    const { userId, costBasis, profit, percentage } = req.body;
    const portfolio = await db.Portfolio.create({
      userId,
      costBasis,
      profit,
      percentage,
    });
    return res.json({ portfolio });
  })
);

router.post(
  "/delete/:assetId",
  asyncHandler(async (req, res) => {
    // const userId = await parseInt(req.session.auth.userId);
    const assetId = parseInt(req.params.assetId, 10);
    const assetPortfolio = await db.assetPortfolio.findOne({
      where: { assetId: assetId },
    });
    await assetPortfolio.destroy();
    // res.redirect("/portfolio");
  })
);

router.post(
  "/:assetToBeAddedId",
  asyncHandler(async (req, res) => {
    console.log("post an asset");
    portfolio = await db.Portfolio.findOne({
      where: {
        userId: req.body.userId,
      },
    });
    console.log("this is the req.body", portfolio.dataValues);
    const assetId = parseInt(req.params.assetToBeAddedId, 10);
    const quantity = 0;
    const addedAsset = await db.assetPortfolio.create({
      assetId,
      portfolioId: portfolio.dataValues.id,
      quantity,
    });
    console.log("this is the addedAsset", addedAsset);
    console.log("you have created the asset");
    return res.json(addedAsset);
  })
);

module.exports = router;
