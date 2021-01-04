const {requireAuth} = require('../../utils/auth')
const asyncHandler = require('express-async-handler');
const express = require("express");
const router = express.Router();
const {Asset} = require ('../../db/models');


router.get(
    '/:assetId',
    requireAuth,
     asyncHandler(async (req, res) => {
    const assetId = parseInt(req.params.assetId, 10);

    const asset = await Asset.findByPk(
        assetId
    )
    return res.json(asset)
}))

     router.post(
        '/add',
     asyncHandler(async (req, res) => {
         const {
             portfolioId,
             name,
             price,
             marketCap,
             rating
         } = req.body;

         const newAsset = await Asset.create({
            portfolioId,
            name,
            price,
            marketCap,
            rating
         })

         res.json({newAsset: newAsset})
     }))

    module.exports = router;
