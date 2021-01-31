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
    const portfolio = await assetPortfolio.findAll({
      where: {
        userId: userId,
      },
      // include: [
      //   {
      //     model: Asset,
      //     through: { attributes: ["assetId", "portfolioId"] },
      //   },
      // ],
    });
    console.log("portfolio response", portfolio);
    return res.json(portfolio);
  })
);

router.post(
  "/create",
  asyncHandler(async (req, res) => {
    const { userId, costBasis, profit, percentage } = req.body;
    const portfolio = await Portfolio.create({
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
    const assetPortfolio = await assetPortfolio.findOne({
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
    console.log(req.params);
    const portfolioId = req.body.userId;
    const assetId = parseInt(req.params.assetToBeAddedId, 10);
    const quantity = 0;
    const addedAsset = await assetPortfolio.create({
      assetId,
      portfolioId,
      quantity,
    });
    console.log("this is the addedAsset", addedAsset);
    console.log("you have created the asset");
    return res.json({ addedAsset });
  })
);

module.exports = router;
