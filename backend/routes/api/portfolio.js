const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler')
const {Asset} = require('../../db/models');

router.get('/portfolio', asyncHandler(async (req, res) =>{
    const assets = await Asset.findAll();
    res.json({assets: assets})
}));

module.exports = router;
