const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler')
const {Asset, Financial} = require('../../db/models');

router.get('/portfolio', asyncHandler(async (req, res) =>{
    const assets = await Asset.findAll();
    const financials = await Financial.findAll();
    res.json({assets: assets, financials:financials})
}));

module.exports = router;
