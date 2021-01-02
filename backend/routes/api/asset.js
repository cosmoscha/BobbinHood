const {requireAuth} = require('../../utils/auth')
const asyncHandler = require('express-async-handler');
const express = require("express");
const router = express.Router();
const {Asset} = require ('../../db/models');


router.get(
    './assetId',
    requireAuth,
     asyncHandler(async (req, res) => {
    const assetId = parseInt(req.params.assetId, 10);

    const asset = await Asset.findOne(
        {where: {id : assetId}})

        res.json(asset)
    }))

    module.exports = router;
