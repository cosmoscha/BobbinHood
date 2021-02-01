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
    const watchlist = await Watchlist.findOne({
      where: {
        userId: userId,
      },
      include: [
        {
          model: Asset,
        },
      ],
    });
    return res.json(watchlist);
  })
);

router.post(
  "/delete/:assetId",
  asyncHandler(async (req, res) => {
    // const userId = await parseInt(req.session.auth.userId);
    const assetId = parseInt(req.params.assetId, 10);
    const assetPortfolio = await assetWatchlist.findOne({
      where: { assetId: assetId },
    });
    await assetWatchlist.destroy();
    // res.redirect("/portfolio");
  })
);
