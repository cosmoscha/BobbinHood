const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");
const { Portfolio } = require("../../db/models");
const asset = require("../../db/models/asset");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const portfolio = await Portfolio.findAll({
      where: {
        userId: session.id,
      },
      include: [
        {
          model: db.Asset,
          through: {
            model: db.assetPortfolio,
            where: {
              portfolioId: session.id,
            },
          },
        },
      ],
    });
  })
);

module.exports = router;
