const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler')
const {Portfolio} = require('../../db/models');

router.get('/', asyncHandler(async (req, res) =>{
    const portfolio = await Portfolio.findAll();
}));

module.exports = router;
