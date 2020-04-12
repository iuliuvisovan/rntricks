const express = require('express');
const router = express.Router();
const articles = require('../data/articles');
const moment = require('moment');
const { addTitleAndColorTo } = require('./util');

router.get('/', (req, res, next) => {
  articles.forEach((x) => {
    addTitleAndColorTo(x);
  });

  res.render('index', { articles, moment });
});

module.exports = router;
