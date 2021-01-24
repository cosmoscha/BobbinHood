const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");
const { Portfolio, User, Asset } = require("../../db/models");
const asset = require("../../db/models/asset");

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const userId = await parseInt(req.params.id, 10);
    const portfolio = await Portfolio.findByPk(userId, {
      include: [
        {
          model: Asset,
          through: {
            attributes: [],
          },
        },
      ],
    });
    res.json(user);
  })
);

router.post(
  "/:newassetId",
  asyncHandler(async (req, res) => {
    const userId = await parseInt(req.session.auth.userId);
    const assetId = parseInt(req.params.newassetId, 10);
    const newPortfolio = await Portfolio.findOne({
      where: { userId, assetId },
    });
    if (newPortfolio) {
    }
  })
);

module.exports = router;
