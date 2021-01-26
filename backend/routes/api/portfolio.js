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
    const portfolio = await Portfolio.findByPk(userId, {
      where: { userId: 4 },
      include: [
        {
          model: Asset,
          where: { name: "Roach" },
          through: { attributes: [] },
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
    const assetToBeAddedId = parseInt(req.params.assetId, 10);
    const assetPortfolio = await assetPortfolio.findOne({
      where: {
        portfolioId: 4,
        assetId: assetToBeAddedId,
      },
    });
    if (assetPortfolio) {
      assetPortfolio.assetId = assetId;
      assetPortfolio.portfolioId = portfolioId;
      await assetPortfolio.save();
      res.redirect("/portfolio");
    } else {
      await assetPortfolio.create({
        assetId,
        portfolioId,
      });
      console.log("you have created the asset");
      res.redirect("/portfolio");
    }
  })
);

// router.post(
//   "/:id",
//   asyncHandler(async (req, res) => {
//     const { assetId, portfolioId } = req.body;
//     console.log("this is the request body", req.body);
//     const assetToBeAddedId = parseInt(req.params.id, 10);
//     const addedAsset = await assetPortfolio.create({
//       assetId,
//       portfolioId,
//     });
//     console.log(
//       "this is where the information from the asset you created",
//       addedAsset
//     );
//     return res.json({ addedAsset });
//   })
// );

module.exports = router;
