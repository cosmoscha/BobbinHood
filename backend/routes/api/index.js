const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const assetsRouter = require('./assets.js');
const assetRouter = require('./asset.js');

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });

  router.use('/session', sessionRouter);

  router.use('/users', usersRouter);

  router.use('/assets', assetsRouter);

  router.use('/asset', assetRouter);
module.exports = router;
