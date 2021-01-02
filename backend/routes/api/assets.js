const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler')
const {Asset, Financial} = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

router.get(
    '/asset',
    requireAuth,
     asyncHandler(async (req, res) =>{
    const assets = await Asset.findAll();
    // const financials = await Financial.findAll();
    res.json({assets: assets})
}));

module.exports = router;
