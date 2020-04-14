const express = require('express');
const router = express.Router();
const articles = require('../data/articles');
const moment = require('moment');
const { enhance } = require('./util');

router.get('/', (req, res, next) => {
  console.log('articles', articles);

  articles.forEach((x) => {
    enhance(x);
  });

  res.render('index', { articles, moment });
});

module.exports = router;
